import axios from "axios";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Skeleton from "../../components/Skeleton";

type skeletonDataType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export default function PageSkeleton() {
  const [data, setData] = useState<Array<skeletonDataType>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      setData(res.data.data);
      setTimeout(() => setIsLoading(false), 3000);
    });
  }, []);

  return (
    <Wrapper>
      <ul className="contentWrapper">
        {isLoading ? (
          new Array(data.length).fill(1).map((_, i) => {
            return <Skeleton key={i} />;
          })
        ) : (
          <>
            {data.length > 0 &&
              data.map((item) => {
                return (
                  <li key={item.id} className="item">
                    <div>
                      <img alt="profile" className="img" src={item.avatar} />
                    </div>
                    <div className="info">
                      <p>
                        <strong>
                          {item.first_name} {item.last_name}
                        </strong>
                      </p>
                      <p>{item.email}</p>
                    </div>
                  </li>
                );
              })}
          </>
        )}
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  text-align: center;
  width: 30%;
  strong {
    font-weight: bold;
  }

  .contentWrapper {
    list-style-type: none;
    width: 100%;
  }

  .item {
    display: flex;
    align-items: center;
    margin: 15px 0;
    padding: 20px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  .img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;
  }
`;
