import { defineStyleConfig } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import { cardAnatomy, avatarAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

//------------------------------------------BUTTON--------------------------------------
export const Button = defineStyleConfig({
    baseStyle: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        borderRadius: 'base',
    },
    variants: {
        primary: (props: StyleFunctionProps) => ({
            bg: mode('primary.500', 'primary.100')(props),
            color: mode('#ffffff', '#000000')(props),
            _hover: {
                bg: 'primary.400',
            }
        }),
        secondary: (props: StyleFunctionProps) => ({
            bg: mode('secondary.500', 'secondary.100')(props),
            color: mode('#ffffff', '#000000')(props),
            _hover: {
                bg: 'secondary.400',
            }
        }),
        shadow: (props: StyleFunctionProps) => ({
            boxShadow: mode('0 0 2px 2px #efdfde', '0 0 2px 2px #626363')(props),
        }),
        links: (props: StyleFunctionProps) => ({
            bg: mode('none', 'none')(props),
            color: mode('telegram.500', 'telegram.500')(props),
            fontWeight: 'normal',
            fontSize: '16px',
            letterSpacing: '2px',
            textTransform: 'lowercase',
            _hover: {
                bg: 'none',
                textDecoration: 'underline'
            },
            _after: {
                content: '">>"'
            }
        }),
        login: (props: StyleFunctionProps) => ({
            bg: mode('green.500', 'green.500')(props),
            color: mode('#ffffff', '#ffffff')(props),
            border: '1px solid #cecece',
            _disabled: {
                bg: 'red.500',
            },
            _hover: {
                bg: 'telegram.500',
                _disabled: {
                    bg: "red.500"
                }
            },
            _focus: {
                bg: 'purple.500'
            },
        })
    }
})

//------------------------------------------CARD--------------------------------------

const { definePartsStyle: cardPartsStyle, defineMultiStyleConfig: cardMultiStyleConfig } = createMultiStyleConfigHelpers(cardAnatomy.keys)

export const Card = cardMultiStyleConfig({
    variants: {
        banner: cardPartsStyle({
            container: {
                bg: "light.500",
                color: 'dark.500',
                height: '150px',
                width: "100%",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                _dark: {
                    bg: 'dark.300',
                    color: 'light.400'
                },
                main: {
                    fontWeight: 'bold',
                    color: '#3d3d3d'
                },
                footer: {
                    fontStyle: 'italic',
                    _before: {
                        content: '"-"'
                    }
                }
            },
        }),
        bookmark: cardPartsStyle({
            container: {
                bg: 'telegram.100',
                p: 4,
                m: 1,
                w: '32%',
                display: 'inline-block',
            },
            body: {
                fontWeight: 'bold',
                p: 0,
                fontSize: '20px'
            },
            header: {
                p: 0,
                display: 'block',
                textAlign: 'right'
            },
            footer: {
                display: 'block',
                p: 0,
                textAlign: 'right',
                fontStyle: 'italic',
                color: '#636363'
            }
        }),
        author: cardPartsStyle({
            container: {
                border: '1px solid #dadada',
                boxShadow: '2px 2px 4px 1px #cecece',
                p: 4,
                borderRadius: 4
            },
            header: {
                p: 0,
                fontWeight: 'bold',
                borderBottom: '1px solid #cecece'
            },
            body: {
                p: 0
            },
            footer: {
                p: 0,
                textAlign: "right",
                display: 'block'
            }
        }),
        quote: {
            container: {
                p: 4,
                w: 'md',
                h: 180,
                mb: '8px',
                boxShadow: '1px 1px 1px 1px #cecece'
            },
            body: {
                p: 0
            },
            footer: {
                p: 0,
                display: 'flex',
                justifyContent: 'flex-end',
                borderTop:'1px solid #cecece'

            }
        }
    }
})

//------------------------------------------AVATAR--------------------------------------
const { definePartsStyle: avatarPartsStyle, defineMultiStyleConfig: avatarMultiStyleConfig } = createMultiStyleConfigHelpers(avatarAnatomy.keys)

export const Avatar = avatarMultiStyleConfig({
    variants: {
        bookmark: avatarPartsStyle({
            container: {
                bg: "dark.500",
                color: 'light.100',
                _dark: {
                    bg: 'light.100',
                    color: 'dark.500'
                }
            }
        })
    },
})