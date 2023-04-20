import React from 'react'
import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Input, DrawerFooter, Text } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Navbar from "@/share/organisms/navbar"
import { IChildren } from '@/typecheck/types'
import { routePages } from '@/utils/routes'
import Link from 'next/link'

export default function LoggedInLayout({ children }: IChildren) {
    const router = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef(null)
    if (router.pathname === '/login' || router.pathname === '/register') {
        router.replace('/')
    }
    return (
        <>
            <Navbar type='loggedin' btnRef={btnRef} onOpen={onOpen} />
            {children}
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader>Quotes Page</DrawerHeader>

                    <DrawerBody>
                        {
                            routePages.map((item: any, index:any) =>
                                <Button
                                    key={index}
                                    variant='link'
                                    w={'100%'}
                                    textAlign='right'
                                    border={'1px solid #cecece'}
                                    h={30}
                                    onClick={() => router.push(item.path)}
                                >
                                    {item.name}
                                </Button>
                            )
                        }
                    </DrawerBody>
                    <DrawerFooter>
                        <Text>
                            quotes page
                        </Text>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}