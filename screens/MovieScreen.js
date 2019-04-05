import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'expo';

import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import MovieScreenContainer from '../containers/MovieScreenContainer';

import Colors from '../constants/Colors';

const MovieScreen = ({
    state,
    displayAddButton,
    onAddToList
}) => (
  <View style={styles.container}>
    {(() => {
      if (state.loading) return <Loading flex={1} />;
      if (state.error)
        return (
          <ErrorMessage text={state.error} containerStyle={styles.errorStyle} />
        );
      return (
        <ScrollView 
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.topInfo}>
            <Image
              style={styles.image}
              source={{uri: `${state.movie.Poster}`}}   
            />
            <View style={styles.rightTextWrapper}>
              <Text style={styles.headerText}>
                {state.movie.Title}
              </Text>
              <Text style={styles.yearText}>
                {state.movie.Year}
              </Text>
              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>
                  <Text style={styles.boldText}>Rating:</Text>
                  <Text> {state.movie.Rated}</Text>
                </Text>
                <Text style={styles.infoText}>
                  <Text style={styles.boldText}>Runtime:</Text>
                  <Text> {state.movie.Runtime}</Text>
                </Text>
                <Text style={styles.infoText}>
                  <Text style={styles.boldText}>Released:</Text>
                  <Text> {state.movie.Released}</Text>
                </Text>
                <Text style={styles.infoText}>
                  <Text style={styles.boldText}>Genre:</Text>
                  <Text> {state.movie.Genre}</Text>
                </Text>
              </View>
              <View style={styles.ratingWrapper}>
                {(state.movie.imdbRating !== "N/A") && (
                  <View style={styles.iconWrapper}>
                    <Icon.FontAwesome name={'imdb'} size={24} style={styles.imdbIcon}/>
                    <Text style={styles.ratingText}> {state.movie.imdbRating}</Text>
                  </View>
                )}
                {(state.movie.Ratings.length > 1 && state.movie.Ratings[1].Source === "Rotten Tomatoes") && (
                  <View style={styles.iconWrapper}>
                    <Image source={require('../assets/images/tomato.png')} style={styles.rottenTomatoesIcon}/>
                    <Text style={styles.ratingText}> {state.movie.Ratings[1].Value}</Text>
                  </View>
                )}
              </View>
              {displayAddButton && (
                <Button 
                  title="Add to List"
                  type="outline"
                  titleStyle={styles.buttonTextStyle}
                  buttonStyle={styles.buttonStyle}
                  onPress={() => onAddToList()}
                />
              )}
            </View>
          </View>
          <View style={styles.bottomInfo}>
            <Text style={styles.plotText}>{state.movie.Plot}</Text>
            <View style={styles.furtherInfoContainer}>
              <Text style={[styles.furtherInfoText, styles.textPadding]}>
                <Text style={styles.boldText}>Directors:</Text>
                <Text> {state.movie.Director}</Text>
              </Text>
              <Text style={[styles.furtherInfoText, styles.textPadding]}>
                <Text style={styles.boldText}>Writers:</Text>
                <Text> {state.movie.Writer}</Text>
              </Text>
              <Text style={[styles.furtherInfoText, styles.textPadding]}>
                <Text style={styles.boldText}>Actors:</Text>
                <Text> {state.movie.Actors}</Text>
              </Text>
              <Text style={[styles.furtherInfoText, styles.textPadding]}>
                <Text style={styles.boldText}>Country:</Text>
                <Text> {state.movie.Country}</Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      ); 
    })()}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 16,
  },
  errorStyle: {
    flex: 1
  },
  contentContainer: {
    width: '100%',
    marginTop: 16,
    paddingBottom: 16,
  },
  topInfo: {
    paddingBottom: 16,
    flexDirection: 'row',
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: 260,
    width: 164,
    borderRadius: 4,
  },
  rightTextWrapper: {
    flexDirection: 'column',
    paddingLeft: 6,
    // Adding this made Text wrap (https://github.com/facebook/react-native/issues/1438#issuecomment-278745825)
    width: 0,
    flexGrow: 1,
  },
  headerText: {
    fontSize: 20,
    color: Colors.blackText,
    lineHeight: 24,
    textAlign: 'center',
    paddingVertical: 8,
    fontWeight: 'bold'
  },
  yearText: {
    fontSize: 14,
    color: Colors.blackText,
    lineHeight: 18,
    textAlign: 'center',
  },
  infoContainer: {
    paddingTop: 8,
  },
  infoText: {
    fontSize: 12,
    color: Colors.greyText,
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  ratingWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 12,
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  imdbIcon: {
    paddingRight: 2,
  },
  rottenTomatoesIcon: {
    width: 24,
    height: 24,
    paddingRight: 4,
  },
  ratingText: {
    fontSize: 12,
    color: Colors.blackText,
    textAlign: 'center',
  },
  buttonTextStyle: {
    color: Colors.greyText,
    fontSize: 12,
  },
  buttonStyle: {
    borderColor: Colors.greyText,
    borderRadius: 6,
    margin: 12,
  },
  bottomInfo: {
    paddingTop: 16,
  },
  plotText: {
    fontSize: 18,
    color: Colors.blackText,
    textAlign: 'center',
  },
  furtherInfoContainer: {
    paddingTop: 10,
  },
  furtherInfoText: {
    fontSize: 11,
    color: Colors.greyText,
    textAlign: 'center',
  },
  textPadding: {
    paddingTop: 6
  },
});

export default MovieScreenContainer(MovieScreen);
