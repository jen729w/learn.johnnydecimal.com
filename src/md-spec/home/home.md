---
slug: "/spec/home"
date: "2019-05-04"
title: "A system to organise projects"
---

<!-- # A system to organise projects -->

<h1 class="hidden sm:block">A system to organise projects</h1>
<h1 class="sm:hidden">A system to<br/>organise projects</h1>

When we kept everything on paper, organised people had these things called filing cabinets. They stored all of their documents in them in a structured way so that they could find them again.

Now those same people store all of their files in arbitrarily named folders on their company’s shared drive and wonder why they can’t find anything.

## Nobody can find anything any more

Thousands of emails. Hundreds of files. File structures created on a whim and six layers deep. Duplication of content, lost content. **We thought search would save us from this nightmare, but we were wrong.**

The frustration I see in organisations is palpable. The time and energy wasted is unimaginable.

---

# It’s time to get organised

There are a couple of core concepts, and they’re so simple you’ll wonder why you haven’t thought of them before.

It’s worth mentioning at this point that **all of this is free,** and it’s possible to implement it without any additional tools.

## Step 1: Divide everything in to ten things

1. Take everything you need to organise and sort it in to, at most, ten large buckets.
2. Make sure the buckets are unambiguously different.
3. Put a label on each bucket.

This forces you to group things quite broadly, but that’s the point.

**We call these buckets your areas.** An area might be <span class="jd-inline">Finance</span>.

## Step 2: In each area, divide in ten again

Go through each bucket and repeat the process. **This creates your categories**.

A category within the <span class="jd-inline">Finance</span> area might be <span class="jd-inline">Tax Returns</span>.

Now we have ten areas which contain ten categories each. That’s a hundred categories **at the very most**. It’s very unlikely you will end up with a hundred categories.

## Categories are the key

What’s a category? It’s just a collection of stuff. Book drafts. Travel itineraries. Lease agreements. Test reports. Contracts. **Any type of work you do can become a category.**

The point is that you’ve _defined_ these categories, each of which
is contained within a broader area. You do this when you set up your
system, which we’ll get to shortly.

### We give each category a number

Remember they’re grouped in tens, so our first ten categories will be numbers <span class="jd-inline">10-19</span> and they will all be related to each other.

Let’s say <span class="jd-inline">10-19</span> is our <span class="jd-inline">Finance</span> area. Category <span class="jd-inline">11</span> might be <span class="jd-inline">Tax returns</span>, <span class="jd-inline">12 Payroll</span>, and so on.

We also know that <span class="jd-inline">42</span> will not be a finance-related category. This is the power of the system: you know where you absolutely should _not_ bother looking to find your data.

---

# Now we bring in the numbers

A Johnny.Decimal number looks like this:

<span class="mr-4 text-2xl sm:text-4xl jd-inline">42.18</span>
<span class="mr-4 text-2xl sm:text-4xl jd-inline">12.03</span>
<span class="text-2xl sm:text-4xl jd-inline">63.17</span>

They’re short, memorable, and can be spoken out loud. **They’re always two digits, a decimal point, and two more digits.**

Say it like “forty-two eighteen” or “twelve dot oh-three”.

## Before the decimal: category

The decimal point is there to break the number up, but more importantly to remind you that **the number before the decimal is the important part.** It’s the category.

The category tells you which area it’s in, because all areas start with the same number. If your category starts with the digit <span class="jd-inline">1</span>, that’s something to do with <span class="jd-inline">Finance</span>.

At a glance, you know what the number contains. You’ll be astonished at how many of your category numbers you remember.

## After the decimal: ID

The number after the decimal is just a counter. **We call it the ID:** it starts at <span class="jd-inline">.01</span> and increases with each thing you create.

In these examples, <span class="jd-inline">42.18</span> is the 18th thing you’ve saved in your
<span class="jd-inline">42</span> category.

The 3rd thing you’ve saved in your <span class="jd-inline">12 Payroll</span> category might be <span class="jd-inline">12.03 Payroll schedule 2018</span>.

**The ID doesn’t have any relevance to the item itself** – remember, it’s just a counter.

---

# I get the idea, but why bother?

Many, many reasons.

## Organise your files. Properly

The most obvious use of Johnny.Decimal is in organising your folder structure.

<!-- <Grid stackable doubling columns={2} className={styles.grid_twoColumn}>
  <Grid.Column>
    <Image
      src={img_finder_sampleCompany_category12_expanded}
      alt="Screenshot of macOS Finder folder structure."
      bordered
      rounded
      style={{ width: '305px' }}
    />
  </Grid.Column>
  <Grid.Column>

      This is a folder structure for a small company. (The reasoning behind
      the folder naming structure will be explained later.)

  </Grid.Column>
</Grid> -->

Notice how we have four areas, each with a couple of categories. None of the areas or categories overlap. **There’s only one place anything can ever be.**

Even if you weren’t familiar with this folder structure, you’d be able to find your way to the sales proposals directory.

## Nothing is more than two clicks away, ever

An important restriction of the system is that **you’re not allowed to create any folders inside a Johnny.Decimal folder.**

This means that you’ll never get lost in layers upon layers of folders. It also makes you create quite specific folders for each thing, ensuring that you can always find what you want.

## Tell people where things are

“Hey Kristy, where can I find the payroll schedule?”
<br />
“Twelve dot oh-three.”

Thanks, Kristy.

## Open files and folders instantly

Because your folders contain the Johnny.Decimal number, you can open them without reaching for the mouse.

### Mac users

Press ⌘+space to bring up <a href="https://support.apple.com/en-au/HT204014">Spotlight</a>. Type a Johnny.Decimal number. Press Return.

(If you like this sort of thing, check out <a href="https://www.alfredapp.com/">Alfred</a>.)

### Windows users

Click on the Start button. Type a Johnny.Decimal number in the Search box. Press Return.

### Command line users

Tab completion becomes a joy when your folders start with structured, predictable numbers. Build a <Link to="/concepts/working-at-the-terminal/">small Bash script</Link> to pop you in to any folder instantly:

<!-- Wrap this in some sort of a11y indicator? -->
<div class="ml-4 mr-6 bg-gray-300 rounded-t-md sm:max-w-sm">
  <span class="inline-block w-4 h-4 mt-2 ml-2 text-xs bg-red-700 rounded-full"></span>
  <span class="inline-block w-4 h-4 mt-2 ml-1 text-xs bg-orange-500 rounded-full"></span>
  <span class="inline-block w-4 h-4 mt-2 ml-1 text-xs bg-green-500 rounded-full"></span>
</div>

<div class="p-2 mb-8 ml-4 mr-6 text-orange-400 bg-black rounded-b-lg shadow-md font-jdmono sm:max-w-sm">
  <span class="pl-2 font-bold whitespace-pre-wrap">~ $</span> cjd 12.03
  <br/>
  <span class="pl-2 font-bold whitespace-pre-wrap">12.03 Payroll for 2018 $</span> <span class="blinking-cursor">|</span>
</div>

## Fix your email

Put the Johnny.Decimal number in your email subject and you’ve instantly categorised everything. Your colleagues will think you have mystical powers because <Link to="/concepts/managing-email/">you’ll actually be able to find email again</Link>.

## Display it on printed copies

Rather than including the complete file path on printed documentation, just add the Johnny.Decimal number.

## Tag things in real life

Managing physical objects? Just write the Johnny.Decimal number on a sticky note.

---

# Sold? Let’s go

By now you either <Link to="/concepts/">see the power of this and want more</Link>, or you’re <a href="https://start.duckduckgo.com/?q=dogs+wearing+clothes&iar=images&iax=images&ia=images&kp=1">confused and sad</a>.
