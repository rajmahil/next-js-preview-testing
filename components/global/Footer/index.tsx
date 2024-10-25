import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import { loadSettings } from '@/sanity/loader/loadQuery'

import FooterLayout from './FooterLayout'
const FooterPreview = dynamic(() => import('./FooterPreview'))

export async function Footer() {
  const initial = await loadSettings()
  const draft = await draftMode();

  if (draft.isEnabled) {
    return <FooterPreview initial={initial} />
  }

  return <FooterLayout data={initial.data} />
}
