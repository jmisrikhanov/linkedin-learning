import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserLoader } from "./UserLoader";
import { UserInfo } from "./UserInfo";
import { ResourceLoader } from "./ResourceLoader";
import { ProductInfo } from "./ProductInfo";
import { DataSource } from "./DataSource";
import axios from "axios";

function App() {
  return (
    // <CurrentUserLoader>
    //   <UserInfo />
    // </CurrentUserLoader>

    // <>
    //   <UserLoader userId="123">
    //     <UserInfo />
    //   </UserLoader>
    //   <UserLoader userId="234">
    //     <UserInfo />
    //   </UserLoader>
    //   <UserLoader userId="345">
    //     <UserInfo />
    //   </UserLoader>
    // </>

    // <>
    //   <ResourceLoader resourceUrl="/users/123" resourceName="user">
    //     <UserInfo />
    //   </ResourceLoader>
    //   <ResourceLoader resourceUrl="/products/1234" resourceName="product">
    //     <ProductInfo />
    //   </ResourceLoader>
    // </>

    <>
      <DataSource
        getDataFunc={async () => {
          const response = await axios.get("/users/123");
          return response.data;
        }}
        resourceName="user"
      >
        <UserInfo />
      </DataSource>
    </>
  );
}

export default App;
