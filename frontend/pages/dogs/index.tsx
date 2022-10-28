import { MouseEvent, useState, useEffect } from "react";
import styled from "styled-components";
import PrimaryButton from "../../components/PrimaryButton";
import { Dog, getDogs, updateDogs } from "../../models/dogs";
import isVideo from "../../utils/isVideo";
import { flashError } from "../../utils";
import Layout from "../../components/Layout";

const GalleryContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  > li {
    position: relative;
    width: 100%;
    padding-top: 100%;
    @media only screen and (min-width: 768px) {
      width: 25%;
      padding-top: 25%;
    }
    img,
    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

const Dogs = () => {
  const [dogs, setDogs] = useState<Dog[]>([]);

  const [submitting, setSubmitting] = useState(false);

  const loadDogs = async () => {
    try {
      const items = await getDogs();
      setDogs(items);
    } catch (e) {
      flashError(e);
    }
  };

  const onClick = async (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSubmitting(true);
    try {
      await updateDogs();
    } catch (e) {
      flashError(e);
    }
    setSubmitting(false);
    await loadDogs();
  };

  useEffect(() => {
    loadDogs();
  }, []);

  return (
    <Layout title="Dog Gallery">
      <h1>Dogs 🐶</h1>
      <GalleryContainer>
        {dogs.map((i) => (
          <li key={i.id}>
            {isVideo(i.url) ? (
              <video autoPlay controls muted loop>
                <source src={i.url} />
              </video>
            ) : (
              <img src={i.url} />
            )}
          </li>
        ))}
      </GalleryContainer>
      <PrimaryButton
        type="button"
        value="Fetch"
        disabled={submitting}
        onClick={onClick}
      />
    </Layout>
  );
};

export default Dogs;
