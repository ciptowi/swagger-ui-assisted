import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import docs from "./docs.json";

function Swagger() {
  return (
    <div>
      <SwaggerUI spec={docs} />
    </div>
  );
}

export default Swagger;
