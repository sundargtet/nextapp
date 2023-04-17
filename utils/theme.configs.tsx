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
            color: mode('#000000', '#000000')(props),
            _hover: {
                bg: 'secondary.400',
            },
        }),
        login : (props:StyleFunctionProps)=>({
            bg:mode('green.500', 'green.500')(props),
            color: mode('#ffffff', '#ffffff')(props),
            border:'1px solid #cecece',
            _disabled : {
                bg:'red.500',
            },
            _hover : {
                bg:'telegram.500',
                _disabled:{
                    bg:"red.500"
                }
            },
            _focus:{
                bg:'purple.500'
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
                _dark: {
                    bg: 'dark.300',
                    color: 'light.400'
                }
            }
        })
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