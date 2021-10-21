import { connect, useDispatch, useSelector } from 'react-redux';
import {inc, dec} from '../modules/bpp'
import Bpp from '../components/Bpp'


// hooks방법
const BppContainer = () => {
    const num = useSelector(state => state.num);
    const dispatch = useDispatch();
    return(
      <Bpp num={num}
      onInc={()=>dispatch(inc())}
      onDec={()=>dispatch(dec())}
      />
    )
  };

  export default BppContainer;

