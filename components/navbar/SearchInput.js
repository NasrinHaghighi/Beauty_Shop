import React from 'react';
import styles from './SearchInput.module.css'
import Image from 'next/image';
import searchIcon from '../../public/images/Component 1 – 1.png'




const SearchInput =() =>{
  return <>
   <div className={styles.search_input}>
   <div>
        <button
        //   onClick={handleSearchByModel}
          className={styles.search_input_icon}>
          <Image
            src={searchIcon}
            alt="search"
            width={32}
            height={32}
          />
        </button>
        <input
        className={styles.input}
        //   onChange={hanldeSearchInput}
        //   onKeyPress={handleSearchByModelOnKeyPress}
         // value={query}
          type="text"
          placeholder="جستجو"
        />
     </div>
    </div>
  </>;
}

export default SearchInput;
