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
  static async request<G, T>(
    endpoints: string,
    requestMethod: string,
    requestBody?: T
  ): Promise<G> {
    const response = await fetch(`${process.env.apiUrl}/${endpoints}`, {
      method: requestMethod,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    if (response.ok) {
      return data;
    }

    throw data;
  }

  static async get<G>(endpoints: string) {
    const resolved = await this.request<G, G>(endpoints, "GET");

    return resolved;
  }

  static async post<T>(endpoints: string, requestBody: T) {
    const resolved = await this.request(endpoints, "POST", requestBody);

    return resolved;
  }

  static async put<T>(endpoints: string, requestBody: T) {
    const resolved = await this.request(endpoints, "PUT", requestBody);

    return resolved;
  }
}
