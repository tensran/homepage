# WARNNING

- `在 MyDocument 中看到的 <Head> 實際上與 next/head 不太一樣，主要是因為 Document 只會在伺服器端渲染，而且只會渲染一次，在 <Head> 裡面的設定讓整個專案所有的頁面都會是一樣的，因此官方在 Next.js 10 的版本中建議使用者不要再 <Head> 裡面使用像是 <title> 的 tag，它應該被使用在 next/head 裡面。`

# need 2 do

- create threejs mode and normal eff ( framer-motion ) mode.

# news

Generics Types translted

# eslint

skip 'eslint' error with `<neovim: trouble>`

# ts version

## vite >>> turbo

```
error - [resolve]
  src/components/navbar/Box.tsx
    Error resolving EcmaScript Modules request
    unable to resolve module "styled-components"

  src/pages/index.tsx
    Error resolving EcmaScript Modules request
    unable to resolve module "styled-components"

```

# warn on works distory check

# menubar alphna problem

## need to do \*

- maybe can change three.js > babylon.js
- clone three/example/\* three demo list
- learn react
  - useEffect
  - useState
  - useCallback
  - useRef

# how 2 get .glb on browser cmd

## error by navbar > MenuLink

`error  Type '{ children: string; as: ForwardRefExoticComponent<RefAttributes<HTMLAnchorElement>>; href: string; }' is not assignable to type 'IntrinsicAttributes`

## svg file sample

`~/build/blox/user/nextjsExamples/image-legacy-component/components/view-source.tsx`

## @chakra-ui/react function error (maybe not support typescript)

> find different way pack css and js

interface css string: something wanring

# sub

```

https://chakra-ui.com/docs/components

```

### @chakra-ui function props

```
   2 _ │ import {
   3 _ │   Box,
   4   │   Button,
   5 + │   chakra,
   6 + │   Container,
   7 + │   Heading,
   8 + │   Link,
   9   │   List,
  10   │   ListItem,
  11 ~ │   SimpleGrid,
  12 ~ │   useColorModeValue
  13   │ } from '@chakra-ui/react'
```

input `Props` to overline

# 0425

when i click in tips or works folder pages, page will print again.

> navbar need 2 save in cookies. lock down

# 0417

`nd` problem, && SSR SRD

> use poe: chat is clean
> battery high: ontime dev page(flash)

# 0415

`windowDisplay.js` >> `tips.js` && `works.js`

> find `aa-staus` error: `5 processes have profiles defined. `

# 0413

look at `tips.js` like `posts.js` [linkBox, LinkOverlay]

> `{children}` is Seamless connection

# 0411

input eff motion line on d text

# 0406

```warning
Warning: Received `false` for a non-boolean attribute `scroll`.

If you want to write it to the DOM, pass a string instead: scroll="false" or scroll={value.toString()}.

If you used to conditionally omit it with scroll={condition && value}, pass scroll={condition ? value : undefined} instead.

```

# 0404

post.js: how 2 show title in menu

# 0307

`_app.js` lost `Chakra.js`

# 0309

`Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.`

# 0310

youtu-20:02

## posts.js

check out posts > [slug].js

## motion:framer-motion > animation

when i mouse moving to title, tranfrom

## \_document.js what s doing

## framer-motion

sinlgeImage img or Back choose

## how to slug posts folder file title in index.js page

in `[slug: 'filename']`

## chakra make web & web Seamless connection

`variant='section-title'` motion with sub-line(title)

## navbar >> asPath
