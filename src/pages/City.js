import { useNavigate, useParams } from 'react-router-dom';

import CityDetail from '../components/CityDetail';
import Container from '../components/Container';

function City() {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <button className="button" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
      <div className="flex justify-center">
        <CityDetail city={params.city} />
      </div>
    </Container>
  );
}

export default City;
