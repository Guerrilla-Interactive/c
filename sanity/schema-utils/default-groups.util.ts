type GroupTypeName = 'basic' | 'content' | 'meta'

interface GroupType {
  title: string
  name: GroupTypeName
}
export const defaultGroups: Array<GroupType> = [
  {
    title: 'Basic',
    name: 'basic',
  },
  {
    title: 'Content',
    name: 'content',
  },
  {
    title: 'SEO & metadata',
    name: 'meta',
  },
]

export const SanityFieldGroups = defaultGroups.reduce(
  (prev, curr) => ({
    ...prev,
    [curr.name]: curr.name,
  }),
  {},
) as Record<GroupTypeName, GroupTypeName>
