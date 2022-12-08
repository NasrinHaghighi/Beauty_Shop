import React ,{useState} from 'react'
import styles from './Usercomments.module.css'
import Image from 'next/image';
import likeIcon from '../../public/images/like.png'
import retangleIcon from '../../public/images/Rectangle 120.png'

import ModalPage from './ModalPage'


const Usercomments =( {...singleProduct})=> {
    const {name, model} =singleProduct
    const comments = singleProduct.comments

///close and open comments-default is 3///
    const commentsLength= singleProduct.comments.length
    const [commentRow , setcommentRow] = useState(3)

    const openComment=()=>{
        if(commentRow === 3){
            setcommentRow(commentsLength)
        }else{
            setcommentRow(3)
        }
       
  }
  ///close and open modal///
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
 
    //console.log(comments)
  return (
      <div >
          {openModal ? <ModalPage onClose={handleClose}/>: null}
      <div className={styles.title}><p>امتیاز و دیدگاه کاربران </p> <button type='button' onClick={handleOpen}>افزودن دیدگاه</button> </div>
      <p className={styles.name}>{name} مدل {model}</p>
      {comments.slice(0,commentRow).map((item)=>{
          return(
              <div key={item.id} className={styles.container}>
                  <p>{item.text}</p>

                  <div className={styles.info}>
                      <div className={styles.info1}>{item.date} <span><Image alt="img" src={retangleIcon}/> {item.name}</span></div>
                      <div className={styles.info2}><button>پاسخ دادن</button> <span>{item.commentLikes} <Image alt="img"  src={likeIcon}/> </span></div>
                  </div>
              </div>
          )
      })}
      <button type='button' className={styles.showMore} onClick={openComment}>نمایش کامل دیدگاه کاربران</button>
      </div>
  )
}

export default Usercomments