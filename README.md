## With/Without "src" dir

1. Make sure that in the `tailwind.config.js` you're specified appropriate directory
   pattern strings in the content array.
1. Update `compilerOptions.paths` inside `tsconfig.json` appropriately.
1. **DON'T** update `compilerOptions.baseUrl`.

## Icons

1. Note before installing other icon packages that [@phosphor-icons/react] is pre-installed.

[@phosphor-icons/react](https://github.com/phosphor-icons/react)

## Notes

1. Following the response to this issue <https://github.com/sanity-io/preview-kit/issues/789>, we're using <https://github.com/sanity-io/nextjs-blog-cms-sanity-v3/blob/main/package.json> as reference for making Sanity Presentation along with Preview from document desk structure work together.
