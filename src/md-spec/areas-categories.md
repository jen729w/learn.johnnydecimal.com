---
slug: "/concepts/areas-categories/"
# date: "2019-05-04"
title: "Areas & categories"
---

# Areas & categories

Let’s look again at the format of our numbers. It’s crucial that you understand why they look like they do.

## The complete Johnny.Decimal number

Just as a reminder, every Johnny.Decimal number looks like this.

<div class="inline-block p-2 ml-2 border border-orange-600 font-jdmono">23.24 31.70</div>

In words, we have any two digits, followed by a decimal point, followed by two more digits.

Here are a bunch of random numbers from a theoretical system.

## Group things together (categories)

Johnny.Decimal is all about **grouping similar things together**, so let’s start to do that.

## Do it again (areas)

That’s starting to look more like something organised and a bit less like a bunch of random numbers. Let’s take it one step further.

### Interesting...

You can almost imagine this looking like a set of folders.

If you didn’t care about anything except the 22 numbers, you could just collapse the others like this.

# Of course, we’ve done this backwards

When we decide to organise something with Johnny.Decimal, we don’t _start_ with a bunch of numbers.

We start like this:

- First, we divide everything in our system in to (at most) ten large buckets of stuff. We call those our **areas**, and we assign each area a range like
  <span className={styles.johnnyDecimal_boxed}>10-19</span>, <span
  className={styles.johnnyDecimal_boxed}
  > 20-29
  > </span> … <span className={styles.johnnyDecimal_boxed}>90-99</span>.
- Then, within each area, we break things up again in to (at most) ten more buckets. We call them **categories** and we assign them numbers like <span className={styles.johnnyDecimal_boxed}>11</span>
  , <span className={styles.johnnyDecimal_boxed}>12</span> …{' '}
  <span className={styles.johnnyDecimal_boxed}>19</span>.
- Finally, we assign each individual thing in our system to a category, and give it a unique number. We start at
  <span className={styles.johnnyDecimal_boxed}>.01</span> within each category, and
  work our way up through the numbers.

Let’s use a small company as an example, and write it out without the numbers.

**BOX**

All we really do with Johnny.Decimal—and if at this point you’ve realised this and are thinking, “hang on, all he’s done is put numbers in front of things,” well then you’re not far wrong—is put numbers in front of things.

**But this transforms the way you think about and use everything.** Trust me.

Let’s put numbers in front of the system we just built above.

**BOX**

## So long, cursed alphabet

What does this achieve? For one, it’s removed our dependence on the alphabet. The alphabet is a fine thing but it’s a terrible way to sort your files because things move around. Today we have:

**BOX**

…and tomorrow the exports department come along and do this:
