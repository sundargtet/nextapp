import { useState, useEffect } from "react";
import { Card, Stack, HStack, Text, CardBody, Progress, Box } from "@chakra-ui/react";

export default function Banner({ quote, handleDetails }: any) {

    return (
        <Card
            height='150px'
            width='100%'
            display='flex'
            alignItems='center'
            justifyContent='center'
            // variant='filled'
            cursor={'pointer'}
            onClick={handleDetails}
            variant='banner'
        >
            {quote}
        </Card>
    )
}