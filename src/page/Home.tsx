import type { RootState } from '../redux/app/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/features/counter/counterSlice'

function Home() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
    return (
      <>
         <div className="m-2 text-center h-screen ">
      <div >
        <button 
          aria-label="Increment value"
          className="m-2 border-2 border-rose-500 p-2 rounded  "
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          className="m-2 border-2 border-rose-500 p-2 rounded "
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
      </>
    )
  
  }
  
  export default Home