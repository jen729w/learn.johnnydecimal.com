# JD language spec

> Version: 0.0.1 (2021-05-10).

> Status: draft.

> Note: all comments are welcome. Pick this apart for me. Please use [this thread](https://forum.johnnydecimal.com/t/jd-index-text-format-ideas-and-comments-please/48/17) on the forum.

# What is this?

I want anyone to be able to write JD software, and I want to be able to transfer data easily between this different software. So this file defines the official Johnny.Decimal language specification. If you write software that reads or writes a file that looks like this, it should work with any other software that does the same.

## Goals

1. Enable simple transfer of data between programs by having the 'database' just be a text file,
2. which is as human-readable as possible; you mustn't *require* a program to maintain the file.

I'm conscious that this defines a spec for a human-readable file, but that almost all software will actually hold the user's data in a structured database format. Some software may never actually display the user's data in the format described in this file: it may only ever be used for import/export. This influences some of the design decisions.

I do *not* want to specify a structured database format, e.g. a JSON object or whatever. That's up to you, build what you need to make your app work. You just need to be able to import or export a file that looks like this in order to be 'Johnny.Decimal compliant'.

I'll happily promote apps that comply with this standard.

# Spec

> Note: defined terms are **bold**, see 'Definitions' below.

## All errors are hard errors

There's no 'warning' state if something wasn't quite right: you either pass in full, or you fail hard. This is intended to prevent loss of user data.

## White space is irrelevant

White space may be used to make the file more readable -- it is encouraged, and suggested rules are documented below -- but from a parsing perspective, white space is irrelevant and must be ignored.

```
  00-09 Area
10-19 Area
    20-29 Area     // Ugly but perfectly valid
```

White space at the start and end of the line, that is.

```
00-09Area         
    ^^             // Error: you still need the space here
```

In other words, if you `TRIM()` every line of your file, you lose no information.

## Titles are mandatory

You can't have a number with no title.

```
00-09 Area
   00              // Error: no title
```

## Titles are UTF-16 and have no (practical) maximum length

Treat them like the JavaScript [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length) object. UTF-16 with no practical limit on size.

Stylistically, however, very long (hundreds+ of characters) titles are discouraged. Move your thoughts to a note.

# Parsing rules

## Rules of order

Everything must appear in numerical order.

```
10-19 Area
00-09 Area         // Error: not in order
```

```
00-09 Area
   01 Category
   00 Category     // Error: not in order
```

```
00-09 Area
   00 Category
      00.01 ID
      00.00 ID     // Error: not in order
```

## No duplicates

No duplicates are allowed.

```
00-09 Area
00-09 Area         // Error: duplicate
```

```
00-09 Area
   00 Category
   00 Category     // Error: duplicate
```

```
00-09 Area
   00 Category
      00.00 ID
      00.00 ID     // Error: duplicate
```

## Rules of parenthood

- Every category must have the correct area as a parent.
- Every ID must have the correct category as a parent.

```
00-09
   00 Category 00  // OK
      00.00        // OK
      99.00        // Error: parent category isn't 99
   10 Category 10  // Error: parent area isn't 10-19
```

## Items may be skipped

There is no obligation to include an item as long as the rules of order are upheld.

```
90-99 Area         // OK: we skipped areas 00-09 through 80-89
```

```
00-09 Area
   09 Category     // OK: we skipped categories 00 through 08
```

```
00-09 Area
   00 Category
   00.99 ID        // OK: we skipped IDs 00 through 98
```

- A category must still have a matching parent area.
- An ID must still have a matching parent category.

```
00 Category        // Error: no parent area
```

```
00-09 Area
   00.00 ID        // Error: no parent category
```

## Comments

[JavaScript-style comments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#comments) are allowed.

### // All text following

On a line, all text following the characters `//` is treated as a comment

```
00-09 Area         // Look familiar?
```

### /* Multi-line */

Multi-line comments start on a new line with `/*` and end, either on the same or a later line, with `*/`.

Given that you're likely storing your JD system in an actual database, this deviates from the JavaScript standard which allows a multi-line comment to *start* on any line, including one which contains content. That sounds like a nightmare for a database so is not permitted.

```
00-09 Area
/* I am a perfectly valid
   multi-line comment. */
   00 Category
```

```
00-09 Area         /* Error: can't start on a
                      line with JD content */
```

### The HTML comment is reserved for now

I may use the `<!--HTML style comment-->` in the future as an indication to the parser that it should do something special. So it is reserved for now, don't use.

## Dividers

We ~~borrow~~ steal the horizontal rule definition from [Markdown](https://daringfireball.net/projects/markdown/syntax#hr).

The following are all permitted and should be interpreted as a divider.

```
* * *

***

*****

- - -

---------------------------------------
```

## Blank lines

> Note: I'm not happy with this at all. Needs more thought...

Permitted between **parsable items**. If you are writing a parser you should retain the user's blank lines (vs. ignoring them or squashing them in to one). They may be using them to make their file more readable.

Similarly, don't arbitrarily insert blank lines, say around a divider. If the user didn't put it there, don't put it there.

*Or*, do we just say that any blank lines = one blank line. They just get squashed. If you want more, use a multi-line comment. Open to suggestions.

Managing blank lines between metadata sounds like a headache, so it's a soft error: the blank line will just be ignored, but there's no expectation that it will be *remembered*.

## Metadata

User-defined metadata is allowed under any **project**, **area**, **category**, or **ID**. It becomes the metadata for whichever item is its immediate parent.

Metadata is shown as a dash, a space, a key name, a colon, a space, and a value. The key name may not contain any punctuation other than an underscore unless it is surrounded in "double quotes", in which case it can contain anything you like. The value can be a UTF-16 string. (Treat it like a JavaScript object, basically.)

Key names are case-sensitive.

Multiple entries are allowed.

```
00-09 Area
      - Note: this is metadata. The key name is 'Note', and the value
              is this string of text that you are reading.
      - Also_a_note: OK.
      - "Key name with space": OK.
      - 9waysToDoAThing: OK.
      - Error-no-dashes: error.
      - Error no spaces: error.
```

```
- Error: this metadata is invalid, it has no parent.
00-09 Area
```

```
00-09 Area
      -Error:no space between the dash, the key, and the colon.
```

Comments are ignored in metadata. It already *is* a comment.

```
00-09 Area
      - Comment: this metadata is the comment. So // this does nothing,
                 and /* neither does this */. It's just a string.
```

The value of a piece of metadata may include a hard line break. The value should be parsed as the value until a line containing a **parsable item** or another piece of metadata is found.

```
00-09 Area
      - Line_breaks: shine on,
                     you crazy diamond.
      00 Category
```

It is up to the parser, or the user's preferences, how to indent metadata. The author's preference is shown above.

### Reserved metadata keys

The following keys should be reserved for use by the system. How they are handled is up to the program doing the handling.

- `URI:` If an item has an external reference -- for example, a longer-form note in an external program -- that reference can be specified as the `URI` value. 
    - In this example, a program may choose to show the longer-form note when the item is selected.
    - e.g. `- URI: simplenote://note/d3764b2f295e492381e8f23a0a7230a9`

# Handling multiple projects

The [multiple projects](https://johnnydecimal.com/concepts/multiple-projects/) syntax extends the basic system by prepending a three-digit project number.

- Without: `12.34`
- With: `678.12.34`

The language handles this as follows.

1. If you want to use the multiple-project syntax in a file, the first **parsable item** must be a project.
2. If the first **parsable item** is not a project, no other projects are permitted in the file.

Because once we're 'in' a project, the rest of the structure is just a plain old JD system, and is parsed as if the project did not exist. When we reach the next project number in the file (if there is one), the parser should 'reset' and treat the next section as a separate JD system.

### Valid

```
000 Project
    00-09 Area
    // ...and so on
001 Project
    00-09 Area
    // ...and so on
```

### Invalid

```
00-09 Area         // File didn't start with a project
   00 Category
   // ...and so on
001 Project        // So a project later is an error
    00-09 Area
```

### Be careful with out-of-order areas

Don't false-positive an error in this situation.

```
000 Project
    10-19 Area
001 Project
    00-09 Area     // OK: we reset when we hit project 001
```

### Thought: do we allow this?

I sometimes use this pattern and think it should be allowed.

```
000 Project
    00-09 Area
       00 Category
   000.00.00 ID    // Use the full PRO.AC.ID here
```

Note that the project number may only appear before the ID.

```
000 Project
000.00-09 Area     // Error
   000.00 Category // Error
```

Or does it matter? Should we let people use this full numbering if they want to?

# Definitions

- `AC.ID`: we use `AC.ID` to refer to any number in a standard system: `a`rea, `c`ategory, `id`.
- `PRO.AC.ID`: we use `PRO.AC.ID` to refer to any number in a multiple-project system: `pro`ject, `a`rea, `c`ategory, `id`.
- Area: an area definition has the format `x0-x9` where `x` is the same digit.
- Category: a category definition has the format `ac` where `a` and `c` are any digit. (See **`AC.ID`**.)
- ID: an ID definition has the format `AC.ID` where `a`, `c`, `i`, and `d` are any digit. (See **`AC.ID`**.)
- Parsable item: any JD item in the file, i.e. a project, area, category, or ID. In other words, *not* a comment or metadata.