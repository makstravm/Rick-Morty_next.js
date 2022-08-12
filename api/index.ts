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

export class API {
  static async request<T>(
    endpoints: string,
    requestMethod: string,
    requestBody?: T
  ): Promise<API> {
    const response = await fetch(`http://localhost:4000/${endpoints}`, {
      method: requestMethod,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      return await response.json();
    }

    throw response.statusText;
  }

  static async get(endpoints: string) {
    const resolved = await this.request(endpoints, "GET");

    return resolved;
  }

  static async post<T>(endpoints: string, requestBody: T) {
    const resolved = await this.request(endpoints, "POST", requestBody);

    return resolved;
  }
}
