'use client'

import SmoothScrollWrapper from '@/components/effects/SmoothScrollWrapper'
import NoiseOverlay from '@/components/effects/NoiseOverlay'
import PageTransition from '@/components/effects/PageTransition'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NoiseOverlay />
            <PageTransition>
                <SmoothScrollWrapper>
                    {children}
                </SmoothScrollWrapper>
            </PageTransition>
        </>
    )
}
