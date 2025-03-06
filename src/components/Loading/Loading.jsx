import { DNA } from 'react-loader-spinner';
import s from './Loading.module.css';

export default function Loading() {
  return (
    <div className={s.loader}>
    <DNA
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{ justifyContent: 'center' }}
      wrapperClass="dna-wrapper"
    />
    </div>
  );
}
