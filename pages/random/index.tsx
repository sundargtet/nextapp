import {getRandomeQuote, randomQuoteValue} from '@/state/api'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'


export default function RandomQuote() {
    const data = useRecoilValue(getRandomeQuote)
    const [vals, callApi] = useRecoilState(randomQuoteValue)
    const handleRandomQuote=()=>{
        callApi('value')
    }
    return (
        <div>
            hello
            <button onClick={handleRandomQuote}>call again</button>
        </div>
    )
}