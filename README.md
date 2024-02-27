[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FGuerrilla-Interactive%2Fc&integration-ids=oac_hb2LITYajhRQ0i4QznmKH7gx)

## With/Without "src" dir

1. Make sure that in the `tailwind.config.js` you're specified appropriate
   directory pattern strings in the content array.
1. Update `compilerOptions.paths` inside `tsconfig.json` appropriately.
1. **DON'T** update `compilerOptions.baseUrl`.

## Icons

1. Note before installing other icon packages that [@phosphor-icons/react] is
   pre-installed.

[@phosphor-icons/react](https://github.com/phosphor-icons/react)

## Notes

1. Following the response to this issue
   <https://github.com/sanity-io/preview-kit/issues/789>, we're using
   <https://github.com/sanity-io/nextjs-blog-cms-sanity-v3/blob/main/package.json>
   as reference for making Sanity Presentation along with Preview from document
   desk structure work together.
1. Preview and Presentation don't work together nicely following the Sanity
   guide <https://www.sanity.io/guides/nextjs-app-router-live-preview> because
   of the `useQuery` form `@sanity/react-loader` doesn't subscribe to updates
   when in preview pane. Instead use `useLiveQuery` from `next-sanity/preview`
   as done in the guide in
   <https://github.com/sanity-io/nextjs-blog-cms-sanity-v3>.

## Updates

1. Sanity:

```
pnpm add sanity@latest @sanity/vision@latest @sanity/overlays@latest @sanity/preview-url-secret@latest
```

## Sanity Schemas

1. Note that any Sanity Schema definition must be of type
   `CustomDocumentDefinition`. See example schema defintion and the import path
   for `CustomDocumentDefinition` type
   [here](https://github.com/Guerrilla-Interactive/c/blob/ccce8499fef4ac0df56c2e1671e9873b13ab2579/sanity/schemas/article.ts).

## Sanity Desk Structure Customization

We propose a simpler API for sanity desk structure customization. See
https://github.com/Guerrilla-Interactive/c/issues/4 for the details.
