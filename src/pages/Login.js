import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import Layout from '../components/Layout';
import { setKey } from '../services/apikeySlice';

function Login() {
  const [loading, setLoading] = useState();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    setError,
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    clearErrors('apikey');

    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=istanbul&appid=${data.apikey}`
    );

    setLoading(false);

    if (response.status < 400) {
      dispatch(setKey(data.apikey));

      navigate(location.state?.return_url ?? '/');
    } else {
      setError('apikey');
    }
  };

  return (
    <Layout>
      <Container>
        <div className="h-screen flex justify-center">
          <div className="self-center">
            {errors.apikey && (
              <div className="p-2 mb-2 bg-red-500 text-white rounded text-center">
                <p>
                  <span>Please enter a valid Api key.</span>
                </p>
              </div>
            )}
            {loading && (
              <div className="p-2 mb-2 bg-cyan-600 text-white rounded text-center">
                <p>Loading</p>
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="border border-cyan-600 rounded p-2 text-black"
                placeholder="Please enter a valid Api key."
                {...register('apikey', {
                  required: true,
                })}
              />

              <input
                type="submit"
                className="ml-2 bg-cyan-600 text-white rounded p-2 cursor-pointer"
              />
            </form>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default Login;
