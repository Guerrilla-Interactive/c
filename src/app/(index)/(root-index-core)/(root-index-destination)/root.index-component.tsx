import Image from 'next/image'

import { Container, FlexRow, Section } from '@/lib/nextgen-core-ui'

import type { RootIndexQuery } from '../(root-index-server)/root.index-query'

export default function RootIndexBody(props: RootIndexQuery) {
  return (
    <>
      <Section className="py-12" dx-tooltip="Header area">
        <Container className="px-4">
          <FlexRow>
            <Image
              src={'/nextgen-white-logo.svg'}
              alt="Nextgen Logo"
              width={200}
              height={50}
            />
          </FlexRow>
        </Container>
      </Section>

      <Section>
        <Container className="px-4"></Container>
      </Section>
    </>
  )
}
