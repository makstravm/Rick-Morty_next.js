const getGQL =
  (url: string) =>
  async <T>(query: string, variables: T) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });

    const data = await response.json();

    return data;
  };

export const gql = getGQL(`${process.env.GQL_API}/graphql`);
