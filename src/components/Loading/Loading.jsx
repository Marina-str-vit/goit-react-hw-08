import { DNA } from 'react-loader-spinner';

export default function Loading({ children }) {
  return (
    <DNA
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{ justifyContent: 'center' }}
      wrapperClass="dna-wrapper"
    />
  );
}
