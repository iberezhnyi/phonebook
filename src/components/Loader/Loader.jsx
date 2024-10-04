import { MutatingDots } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderWrapper>
      <MutatingDots
        height="100"
        width="100"
        color="#35363a"
        secondaryColor="#35363a"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderWrapper>
  );
}
