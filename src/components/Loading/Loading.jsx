import { DNA } from 'react-loader-spinner';
import css from './Loading.module.css';

export default function Loading() {
  return (
    <div className={css.loader}>
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
