import { SanityDocument } from "next-sanity"

export interface CustomDeskGroupType {
	title: string,
	items: Array<CustomDeskSingletonDocType | CustomDeskDocType | CustomDeskGroupType>
}

export interface CustomDeskSingletonDocType {
	title: string,
	icon?: React.ElementType,
	type: SanityDocument,
	isSingleton: true
}

export interface CustomDeskDocType {
	title: string,
	icon?: React.ElementType,
	type: SanityDocument,
	isSingleton: false
}
