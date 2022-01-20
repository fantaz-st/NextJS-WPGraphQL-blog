export const postsQuery = (numberOfPosts = 6, endCursor = null) => {
  return `query MyQuery {
    posts(first:${numberOfPosts},after:"${endCursor}") {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        link
        slug
        date
        excerpt
        categories {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            firstName
          lastName
          id
          avatar {
            url
          }
          }
        }
      }
    }
  }`;
};

export const allPostsQuery = `query MyQuery {
    posts(first:3) {
      nodes {
        id
        title
        link
        slug
        date
        excerpt
        categories {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            firstName
          lastName
          id
          avatar {
            url
          }
          }
        }
      }
    }
  }`;

export const allUsersID = `query MyQuery {
    users {
      nodes {
        id
      }
    }
  }`;

export const featuredPostsQuery = `query MyQuery {
  posts(where: {categoryName: "featured"}) {
    nodes {
      author {
        node {
          firstName
          lastName
          username
          id
          avatar {
            url
          }
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
      content
      date
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
      id
      slug
      title
      tags {
        nodes {
          name
        }
      }
    }
  }
}`;

export const allSlugsQuery = `query MyQuery {
  posts {
    nodes {
      slug
    }
  }
}
`;

export const allCategoriesQuery = `query MyQuery {
  categories {
    nodes {
      count
      slug
      name
    }
  }
}`;

export const allPostsFromAuthorQuery = (userId) => {
  return `query MyQuery {
    user(id: "${userId}") {
        posts {
          nodes {
            title
            content
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            id
            slug
            excerpt
            categories {
              nodes {
                name
                slug
              }
            }
            author {
              node {
                avatar {
                  url
                }
                id
                firstName
                lastName
                description
                email
              }
            }
          }
        }
        firstName
        lastName
        username
        description
        email
        avatar {
          url
        }
      }
    }`;
};

export const allPostsFromCategory = (category) => {
  return `query MyQuery {
    posts(where: {categoryName: "${category}"}) {
      nodes {
        slug
        title
        slug
        id
        author {
          node {
            avatar {
              url
            }
            firstName
            lastName
            username
            id
          }
        }
        content
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }`;
};

export const allUserInformation = (userId) => {
  return `query MyQuery {
    user(id: "${userId}") {
      avatar {
        url
      }
      email
      firstName
      id
      lastName
      description
    }
  }`;
};

export const postContentQuery = (slug) => {
  return `query MyQuery {
    postBy(slug: "${slug}") {
      author {
        node {
          firstName
          lastName
          id
          avatar {
            url
          }
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
      content
      date
      id
      title
  }
}`;
};

export const allUsersCategoriesPostsQuery = `query MyQuery {
  categories {
    nodes {
      id
      name
      slug
    }
  }
  posts {
    nodes {
      id
      slug
      title
    }
  }
  users {
    nodes {
      id
      slug
    }
  }
}
`;

export const searchQuery = (searchTerm) => {
  return `query MyQuery {
    posts(where: {search: "${searchTerm}"}) {
      nodes {
        title
        author {
          node {
            avatar {
              url
            }
            firstName
            id
            lastName
          }
        }
        categories {
          nodes {
            name
          }
        }
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        id
        slug
      }
    }
    users(where: {search: "${searchTerm}"}) {
      nodes {
        avatar {
          url
        }
        email
        description
        firstName
        id
        lastName
      }
    }
  }
  `;
};

export const altHomeQuery = `query MyQuery {
  pageBy(uri: "/home-alt/") {
    content
  }
}
`;

export const allBannersQuery = `query MyQuery {
  posts(where: {categoryName: "banner"}) {
    nodes {
      title
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
      slug
    }
  }
}`;
