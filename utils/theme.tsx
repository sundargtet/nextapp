import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import { Button, Card, Avatar } from './theme.configs'

export const theme = extendTheme({
    colors: {
        primary: {
            100: '#5ec2f7',
            200: '#41b9fa',
            300: '#20aefa',
            400: '#079beb',
            500: '#0477b5'
        },
        secondary: {
            100: '#fcb490',
            200: '#fca87e',
            300: '#fa9b6b',
            400: '#fa9b6b',
            500: '#f77331',
        },
        light: {
            100: '#f5f5f5',
            200: '#edf6fa',
            300: '#ebeced',
            400: '#d2d3d4',
            500: '#c2c4c4',
        },
        dark: {
            100: '#626363',
            200: '#4e4f4f',
            300: '#3d3d3d',
            400: '#262626',
            500: '#000000',
        }

    },
    components: { Button , Card, Avatar},
    styles: {
        global: (props: StyleFunctionProps) => ({
            body: {
                bg: mode('light.100', 'dark.500')(props),
                color: mode('dark.500', 'light.100')(props),
            },
        })
    }
})