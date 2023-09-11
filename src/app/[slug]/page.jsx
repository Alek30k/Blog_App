import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

// const getData = async (slug) => {
//   const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

const SinglePage = async ({ params }) => {
  const { slug } = params;

  //   const data = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            assumenda.
          </h1>
          <div className={styles.user}>
            {/* {data?.user?.image && ( */}
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            {/* )} */}
            <div className={styles.userTextContainer}>
              {/* <span className={styles.username}>{data?.user.name}</span> */}
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        {/* {data?.img && ( */}
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        {/* )} */}
      </div>
      <div className={styles.content}>
        <d iv className={styles.post}>
          {/* <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          /> */}
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              expedita cupiditate nobis deserunt voluptas eveniet hic velit
              similique esse non rerum, assumenda sed facere adipisci obcaecati
              cumque qui mollitia voluptatum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              expedita cupiditate nobis deserunt voluptas eveniet hic velit
              similique esse non rerum, assumenda sed facere adipisci obcaecati
              cumque qui mollitia voluptatum!
            </p>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              expedita cupiditate nobis deserunt voluptas eveniet hic velit
              similique esse non rerum, assumenda sed facere adipisci obcaecati
              cumque qui mollitia voluptatum!
            </p>
            <div className={styles.comment}>
              <Comments postSlug={slug} />
            </div>
          </div>
        </d>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
