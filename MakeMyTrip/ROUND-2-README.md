# MakeMyTrip

## Role - Senior SWE - UI

## Experience - 3years 5months

## Technical Round II - REJECTED ❌

## Round II - Engineering Manager Round - 1 Hour

1. This round was with an Engineering manager. It felt like the manager wanted to grill me on what every topic.

1. Starting with TypeScript, he asked me why do we use TypeScript.
   - How does browser understand TypeScript code ?
   - What does the TypeScript compiler do ?
   - How do we get JavaScript code from TypeScript ?
   - At this point, I told him I didn't knew the internal working of TypeScript's compiler.
1. Moving on, he asked me about Webpack.
   - What is Webpack used for?
   - How does Webpack bundle code?
   - Follow up questions on loaders like Babel, SASS loader were asked.
   - Module federation
   - Micro-frontend architechture & how do the components get shared in this architechture.
1. Then, he asked me about [React.Suspense](https://react.dev/reference/react/Suspense) & [React.Lazy](https://react.dev/reference/react/lazy).
   - Following question was asked to implement polyfill of `React.Lazy` in JavaScript.
   - I have implemented the `React.Lazy` polyfill in the below stackblitz project. Feel free to fork it!
   - > React.Lazy Polyfill - https://stackblitz.com/edit/vitejs-vite-xmkjwv?file=main.js
1. Next, he began by asking about Web Performance, optimizations and Core Web Vitals.
   - Audit tools such as `Lighthouse` & `Performance` tab in Chrome Dev tools, `PageSpeed` Insights and so no.
   - Following up, he asked me to open MakeMyTrip's page and analyze it using `Lighthouse`.
   - After which he asked how can I improve each of the Web Vitals in the analysis like `First Contentful Paint(FCP)`, `Largest Contentful Paint(LCP)`, `Total Blocking Time(TBT)`, `Time to First Byte(TTFB)`, `Cumulative Layout Shifts(CLS)` and so on.
   - I was unable to answer this statisfactorily.
1. Lastly, I was asked about the internals of `V8` JavaScript engine and how would I design my own browser if task with it.
   - I failed to answer this too due to my lack of awarness about the V8 engine.
   - Since, then I have found this talk [JavaScript engines - how do they even? | JSConf EU](https://youtu.be/p-iiEDtpy6I?si=oq0S5udp4Q1b-QBC) by _Franziska Hinkelmann_ engineer at the V8 team explaining about `V8` JS engine.
