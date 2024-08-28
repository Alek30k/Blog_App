import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const API_URL_PRODUCTION = "https://blogale.vercel.app/api/categories";

const API_URL_LOCAL = "http://localhost:3000/api/categories";

const fetchCategories = async () => {
  try {
    const response = await fetch(API_URL_PRODUCTION, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Error fetching categories: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return [];
  }
};

const CategoryList = async () => {
  const categories = await fetchCategories();

  if (categories.length === 0) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Popular Categories</h1>
        <p className={styles.noCategories}>No categories available</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {Array.isArray(categories) ? (
          categories.map((category) => (
            <Link
              href={`/blog?cat=${category.slug}`}
              className={`${styles.category} ${styles[category.slug]}`}
              key={category._id}
            >
              {category.img && (
                <Image
                  src={category.img}
                  alt={category.title || "Category Image"}
                  width={32}
                  height={32}
                  className={styles.image}
                />
              )}
              {category.title}
            </Link>
          ))
        ) : (
          <p>No categotegories available</p>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
