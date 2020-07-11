import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import CharacterItem from './CharacterItem';

const CHARACTER_QUERY = gql`
query {
    characters {
      results {
        id
        name
        status
        image
      }
    }
  }
`;

class Characters extends Component {
    render() {
        return (
            <div>
                <Query query={CHARACTER_QUERY}>
                    {
                        ({ loading, error, data }) => {
                            if (loading) return <h4>Loading...</h4>
                            if (error) console.log(error);
                            return (
                                <div className="cards">
                                    {
                                        data.characters.results.map((character, id) => (
                                            <CharacterItem key={character.id} character={character} />
                                        ))
                                    }
                                </div>
                            );
                        }
                    }
                </Query>
            </div>
        )
    }
}

export default Characters;