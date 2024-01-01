---
title: "Start of a new year"
date: "2024-01-01"
author: "huntears"
description: "2023's retrospective and hopes for the new year"
---

2023 ends and now we are going again for a whole other year.

But before that, it is important to reflect upon what happened during the
whole year and to check on what has been done, discovered, and fucked up.

## What has been done

2023 has been quite an important year for me, as this is the moment
[cubic-server](https://github.com/CubicMC/cubic-server) started to gain some
traction and got some actual work done on it.

This is also the very first year where I had to live by myself in another
country for the very first time, and that experience has been quite the
important one (The Netherlands has been one of the best country I could have
hoped for to live in and the whole time there might actually need its own blog
post all by itself).

I also got a new job as a teacher assistant (Or at least an equivalent of it)
at [my school](https://epitech.eu) which was for me one of the best work
experience I ever had (This might also need its own blog post as I am still
working there and might be still working there until August 2024, and so many
things have already happened that it might warrant its own retrospective).

I also participated a bit in AdventOfCode2023 before time and work got after me
and I couldn't participate much, it was overall very interesting as I took the
time to compete with collegues, friends, and students alike on who could beat
the new days as they came out with either the worst looking code, or just the
fastest/most clever solution of all.

## What I have discovered

### Zig

Zig is a low level language that aims to be a simple language with no hidden
control flow, no hidden memory allocations, and no no preprocessor nor macros
(All of this was taken directly from within the [main page](https://ziglang.org)
of the project).

This project pretty much wants to be a successor to C, which in my opinion rust
failed to be and continues to fail, by just being as simple as possible while
also providing really advanced metaprogramming capabilities, especially with its
comptime features which are freaking great.

### Hare

Hare is also something that I took a bit an interest in this year as it was also
a simple system programming language with some extra features from C that made
quite alluring. I also had the occasion to meet
[Drew Devault](https://drewdevault.com/), the main maintainer of hare during a
test talk about hare and its use in making a simple microkernel based OS he
presented at [Technologia Incognita](https://techinc.nl) to prepare
for FOSDEM.

### The Dutch

From the start of September 2022 up until August 2023 I lived in the Netherlands
in the not so small city of Eindhoven.

It is not really a secret but I am French, and I was a little scared at the idea
of living a whole year in a country that I did not know the language of (Even
though I am currently working on getting better at it), it actually was
completely fine as **everyone** speaks English there, even older people (I
encountered only one person in the Netherlands that couldn't speak English, and
he also couldn't speak Dutch).

That is a very sharp contrast from France where people will literally curse you
for not speaking French to the perfection. In the Netherlands even if you start
speaking Dutch people will realize you are not Dutch and will instantly start
speaking to you in English (Which is really frustrating if you are trying to
learn the language).

For now I will stop here about the Dutch and the Netherlands, because I could
go into much more details which would need its own post by itself (I might do
that one day ;) ).

## What I fucked up

### cubic-server

Let's start by saying that I am really happy to have started cubic-server, it
was a wonderful idea even though the Minecraft protocol is an absolute pain,
because it made me work constantly on one single idea/project and made me step
up my programming and management skills.

Though now a lot of problems arose from that project and the first big one is
the architecture.

#### The architecture

We wanted to do more, to think better, to think ahead, that was pretty much an
error, and now we pay for it by ***very*** long compilation times and chats that
can be accessed from a player by getting its dimension, then the world, then the
worldgroup, and then you could get the chat object (Which is also kind of
overingineered quite a bit).
Needless to say a lot of that architecture could be much more simplified/

#### Out of Scope

When we started that project it was all for just having something for our end
of study project, and for that we needed to prove that there was a lot of work
to be done, and so we did, maybe a bit too much. So now we have a whole
generation system and survival aspects working while the server could have
just been a simple modular base to add more complex parts on top of it.

All those features added on top of each other mixed with the needlessly
complicated architecture make for one hell of a time when you want to dev
anything for it.

And the main question remains, which users are we targeting?

Survival users? We will ***never*** have parity with vanilla, so that's a big
no-no.
Creative players? Well it is possible, but the sheer amount of blocks and
behaviour of them to handle on newer versions of the game make the task very
complicated.
Redstone players? We don't even have a working redstone engine right now, and
we have no idea if it will be hard, easy, long, or anything on it. It's just
being worked on as we go and we hope it will work at some point in time.
Minigame players? Depending on which minigame it is it might just be our best
bet, as there is little interactivity with the map and most of what is happening
is in general already heavily scripted to fit the minigame's rules.

So the best bet as of right now for the target audience would be to replace
small Minecraft server's instances and replace them with a highly modular
cubic-server which can then be modified to fit that specific's minigame's need.

#### The language

C++ is great... until it isn't. Let me explain more on this:

C++ is basically just a superset of C, and the quantity of features is not
really a problem, the problem is which features are better than others, and when
to use them (This has been a long lasting problem in our team as not everyone
has the same skill level with the language and many PRs have been delayed again
and again because it was not exactly what we wanted at the time).

C++ also has a compilation time problem, it will take forever to parse files or
to generate the bytecode the moment you use some templated library (Especially
boost omg), and if one character changes in one header file then you will have
to recompile all the cpp files that depended on that hpp (Try to change one
thing in Server.hpp and be ready to recompile the whole project).

C++ headers make it really hard to do proper incremental compilation and are
just going to be in your way 90% of the time (Headers are also incredibly
frustrating as if you make a single mistake in one of them, not only are you
going to have to rebuild a good chunk of the project but you will also have to
understand whatever cryptic error the compiler through at you on the terminal).

#### The solution

Honestly... A rewrite. Not in C++ for sure, but this project will need a
rewrite. When? Well... you'll see :p (It is already planned in time and we are
starting to have a roadmap for it which should be finished soon:tm:).

## Afterwords

2023 was clearly one of the most important year of my life and I hope things get
better from now on.

I have most likely forgotten a lot of things in this blog post, but that will
only make me more eager to come back with more posts this time (Promise I will
actually try to write on here more than before :D).
