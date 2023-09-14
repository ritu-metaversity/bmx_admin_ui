
import { useJwtTokenQuery } from '../../store/service/jwtTokenServices';

const JwtToken = () => {
    const { data } = useJwtTokenQuery(undefined, { pollingInterval: 1000 });
}

export default JwtToken