<!-- English -->

# graphql package =>

-   It is the core GraphQL implementation in **JavaScript**.
-   It provides the functionality to define GraphQL schemas, parse and validate GraphQL queries, execute queries against a schema, and format responses.
-   graphql is not tied to any specific server or client framework; it's a standalone library that can be used in various JavaScript environments.

# @apollo/server =>

-   This package is part of the Apollo ecosystem and is used for building GraphQL servers in Node.js.
-   It provides tools and utilities to create and manage GraphQL schemas, handle incoming GraphQL requests, execute queries, and send responses.
-   @apollo/server is built on top of the popular express framework, making it easy to integrate GraphQL into existing Node.js web applications.
-   Overall, @apollo/server simplifies the process of creating and maintaining GraphQL servers in Node.js environments.

# What is GraphQL Schema?

-   A GraphQL schema is a fundamental concept in GraphQL.
-   It defines the structure of the data that clients can query and the operations they can perform. A schema in GraphQL typically consists of two main parts: typeDefs and resolvers.

# What are TypeDefs? (or Type Definitions)

-   Type definitions define the shape of the data available in the GraphQL API. They specify the types of objects that can be queried and the relationships between them.

# What are Resolvers?

-   Resolvers are functions that determine how to fetch the data associated with each field in the schema.

## Apollo Client

-   Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. Use it to fetch, cache, and modify application data, all while automatically updating your UI.

# Features

-   Declarative data fetching: Write a query and receive data without manually tracking loading states.
-   Excellent developer experience: Enjoy helpful tooling for TypeScript, Chrome / Firefox devtools, and VS Code.
-   Designed for modern React: Take advantage of the latest React features, such as hooks.
-   Incrementally adoptable: Drop Apollo into any JavaScript app and incorporate it feature by feature.
-   Universally compatible: Use any build setup and any GraphQL API.
-   Community driven: Share knowledge with thousands of developers in the GraphQL community.

### Declarative Data Fetching

-   Apollo Client handles the request cycle from start to finish, including tracking loading and error states. There's no middleware or boilerplate code to set up before making your first request, and you don't need to worry about transforming or caching responses. All you have to do is describe the data your component needs and let Apollo Client do the heavy lifting.

```jsx
function ShowDogs() {
	//  The useQuery hook supports advanced features like an optimistic UI, refetching, and pagination.
	const { loading, error, data } = useQuery(GET_DOGS);
	if (error) return <Error />;
	if (loading) return <Fetching />;

	return <DogList dogs={data.dogs} />;
}
```

### Caching a graph is not an easy task, but they have spent years solving this problem.

```jsx
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	cache: new InMemoryCache(),
});
```

# Installation

```bash
npm install @apollo/client graphql
```

-   **@apollo/client:** This single package contains virtually everything you need to set up Apollo Client. It includes the in-memory cache, local state management, error handling, and a React-based view layer.

-   **graphql:** This package provides logic for parsing GraphQL queries.









<!-- Mongolian translated -->
<!-- Mongolian translated -->
<!-- Mongolian translated -->
<!-- Mongolian translated -->
<!-- Mongolian translated -->
<!-- Mongolian translated -->
<!-- Mongolian translated -->






# graphql package =>

    - Энэ нь **JavaScript** дахь GraphQL-ийн үндсэнхэрэгжилт(implementation) юм.
    - Энэ нь GraphQL Schema-г тодорхойлох, GraphQL query-д задлан_шинжлэх(parse), баталгаажуулах(validate), Schemaийн эсрэг query гүйцэтгэх,responses-ыг форматлах(format) функцээр хангадаг.
    - graphql нь ямар нэгэн тодорхой сервер эсвэл client-ийн хүрээтэй(framework) холбоогүй; Энэ нь янз бүрийн JavaScript орчинд ашиглах боломжтой бие даасан library юм.

# @apollo/server =>

    -   This package is part of the Apollo ecosystem and is used for building GraphQL servers in Node.js.
    -   It provides tools and utilities to create and manage GraphQL schemas, handle incoming GraphQL requests, execute queries, and send responses.
    -   @apollo/server is built on top of the popular express framework, making it easy to integrate GraphQL into existing Node.js web applications.
    -   Overall, @apollo/server simplifies the process of creating and maintaining GraphQL servers in Node.js environments.

# @apollo/server =>

    - Энэ package нь Apollo экосистемийн нэг хэсэг бөгөөд Node.js дээр GraphQL сервер бүтээхэд ашиглагддаг.
    - Энэ нь GraphQL Schema-г үүсгэх, удирдах, ирж буй GraphQL хүсэлтийг зохицуулах, query явуулах, хариу илгээх зэрэгт хэрэглэгдэхүүн, хэрэглүүрээр хангадаг.
    - @apollo/server нь алдартай Express framework дээр бүтээгдсэн тул GraphQL-ийг одоо байгаа Node.js вэб программуудад нэгтгэхэд хялбар болгодог.
    - Ерөнхийдөө @apollo/server нь Node.js орчинд GraphQL сервер үүсгэх, засвар үйлчилгээ хийх үйл явцыг хялбаршуулдаг.

# GraphQL Schema гэж юу вэ?

    - GraphQL Schema нь GraphQL-ийн үндсэн ойлголт юм.
    - Энэ нь үйлчлүүлэгчээс асууж болох өгөгдлийн бүтэц, хийж болох үйлдлүүдийг тодорхойлдог. GraphQL дээрх Schema нь ихэвчлэн typeDefs ба resolvers гэсэн хоёр үндсэн хэсгээс бүрдэнэ.

# TypeDefs гэж юу вэ? (эсвэл Type Definitions)

    - Type definitions нь GraphQL API-д байгаа өгөгдлийн хэлбэрийг тодорхойлдог. Тэд асууж болох objects-ын types болон тэдгээрийн хоорондын хамаарлыг тодорхойлдог.

# Resolvers(Шийдвэрлэгч) гэж юу вэ?

    - Resolvers нь Schema-ийн талбар(field) бүртэй холбоотой өгөгдлийг(data) хэрхэн татахыг(fetch) тодорхойлдог функцууд(functions) юм.

## Apollo Client

    - Apollo Client нь JavaScript-д зориулсан иж бүрэн state management library бөгөөд танд local болон remote-г GraphQL ашиглан удирдах боломжтой. Үүнийг ашиглан UI-г автоматаар шинэчлэхийн зэрэгцээ програмын өгөгдлийг(data) татаж(fetch) авах, кэш(cache) хийх, өөрчлөх(modify) боломжтой.

# Онцлогууд(Features)

    - Мэдээллийн дагуу өгөгдөл(data) татах(fetching): Ачаалах төлөвийг гараар хянахгүйгээр query бичиж, өгөгдөл хүлээн авах.
    - Хөгжүүлэгчийн маш сайн туршлага: TypeScript, Chrome/Firefox devtools болон VS Code-ийн хэрэглүүрийг(tooling) ашиглан хялбар амар.
    - Орчин үеийн React-д зориулагдсан: Hooks гэх мэт хамгийн сүүлийн үеийн React функцуудыг ашиглаарай.
    - Цаашид ашиглах боломжтой: Apollo-г ямар ч JavaScript програм руу оруулаад, онцлог шинж чанараар нь ашиглах боломжтой.
    - Бүх нийтийн нийцтэй: Ямар ч build setup болон GraphQL API ашиглах.
    - Нийгэмд тулгуурласан: GraphQL community-ийн мянга мянган хөгжүүлэгчидтэй мэдлэгээ хуваалцаарай.

### Мэдээллийн мэдээлэл татах(Declarative Data Fetching)

    - Apollo Client нь tracking loading,  error, states зэрэг request cycle-ийг эхнээс нь дуустал зохицуулдаг. Анхны request-ээ гаргахаас өмнө set up middleware эсвэл (boilerplate) нэмэлт код байхгүй бөгөөд та responses-ыг хувиргах эсвэл cach хийх талаар санаа зовох шаардлагагүй болно. Таны хийх ёстой зүйл бол өөрийн component хэсэгт шаардлагатай өгөгдлийг тайлбарлаж, хүнд ачаа өргөх ажлыг Apollo Client-д өгөх явдал юм.


```jsx
function ShowDogs() {
	// UseQuery hook нь UI, refetching, pagination зэрэг дэвшилтэт функцуудыг дэмждэг.
	const { loading, error, data } = useQuery(GET_DOGS);
	if (error) return <Error />;
	if (loading) return <Fetching />;

	return <DogList dogs={data.dogs} />;
}
```

### Graph cach хийх нь амар ажил биш ч тэд энэ асуудлыг шийдэхийн тулд олон жил зарцуулсан.

```jsx
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	cache: new InMemoryCache(),
});
```

# Installation

```bash
npm install @apollo/client graphql
```