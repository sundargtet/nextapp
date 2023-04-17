import { NextRouter, useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { Avatar, AvatarBadge, Stack } from '@chakra-ui/react'
import { bookmarkQuotesCount } from '../../state/selectors'
import Icon from '../../share/atoms/icon'

export default function Bookamarks() {
    const router: NextRouter = useRouter()
    const count: number = useRecoilValue(bookmarkQuotesCount)
    const handleBookmarkList = () => {
        router.push(`/bookmarks`)
    }
    return (
        <>
            {
                count ?
                    <>
                        <Avatar
                            icon={<Icon type='bookmarked' />}
                            cursor='pointer'
                            size='xs'
                            onClick={handleBookmarkList}
                            variant='bookmark'
                        >
                            <AvatarBadge boxSize='1.25em' bg='green.500'>
                                {count}
                            </AvatarBadge>
                        </Avatar>
                    </> :
                    <Avatar
                        icon={<Icon type='bookmark'/>}
                        size='xs'
                        variant='bookmark'
                    />
            }
        </>
    )
}