import React from 'react';
import { StyleSheet, Text, View, ScrollView, Alert, Animated, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'expo';

import Colors from '../../constants/Colors';
import LoadingImage from '../LoadingImage';
import MovieFullContainer from '../../containers/MovieFullContainer';

const MovieFull = ({
    movie,
    displayAddButton,
    onAddToList,
    inWatchList,
    inSeenList,
    onRemoveFromList,
    onAddToSeen,
    componentAnimations
}) => (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.topInfo}>
        <Animated.View style={
          {
            transform: [{
              translateX: componentAnimations.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [-100, -100, 0]
              })
            }],
            opacity: componentAnimations.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [0, 0, 1]
            })
          }
        }>  
          {
            (movie.Poster === 'N/A') ? (
              <View style={styles.noImage}>
                <Text style={styles.noImageText}>n/a</Text>
              </View>
            ) : (
              <LoadingImage
                style={styles.image}
                source={{uri: `${movie.Poster}`}}   
              />
            )
          }
        </Animated.View>
        <Animated.View style={[
          styles.rightTextWrapper,
          {
            transform: [{
              translateX: componentAnimations.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [100, 100, 0]
              })
            }],
            opacity: componentAnimations.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [0, 0, 1]
            })
          }
        ]}>
          <Text style={styles.headerText}>
            {movie.Title}
          </Text>
          <Text style={styles.yearText}>
            {movie.Year}
          </Text>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              <Text style={styles.boldText}>Rating:</Text>
              <Text> {movie.Rated}</Text>
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.boldText}>Runtime:</Text>
              <Text> {movie.Runtime}</Text>
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.boldText}>Released:</Text>
              <Text> {movie.Released}</Text>
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.boldText}>Genre:</Text>
              <Text> {movie.Genre}</Text>
            </Text>
          </View>
          <View style={styles.ratingWrapper}>
            {(movie.imdbRating !== "N/A") && (
              <View style={styles.iconWrapper}>
              <Icon.FontAwesome name={'imdb'} size={24} style={styles.imdbIcon}/>
              <Text style={styles.ratingText}> {movie.imdbRating}</Text>
              </View>
            )}
            {(movie.Ratings.length > 1 && movie.Ratings[1].Source === "Rotten Tomatoes") && (
              <View style={styles.iconWrapper}>
              <Image source={require('../../assets/images/tomato.png')} style={styles.rottenTomatoesIcon}/>
              <Text style={styles.ratingText}> {movie.Ratings[1].Value}</Text>
              </View>
            )}
          </View>
          {displayAddButton ? (
            <Button 
              title={inWatchList ? "Movie Added" : (inSeenList ? "Movie Watched" : "Add to List")}
              type="outline"
              titleStyle={styles.buttonTextStyle}
              buttonStyle={styles.buttonStyle}
              disabledStyle={styles.disabledButtonStyle}
              disabledTitleStyle={styles.disabledButtonText}
              onPress={onAddToList}
              disabled={inWatchList || inSeenList}
            />
          ) : (
            <View style={styles.buttonContainer}>
              <Button 
                title={"Watched it"}
                type="outline"
                titleStyle={styles.buttonTextStyle}
                buttonStyle={styles.seenButtonStyle}
                onPress={() =>
                Alert.alert(
                    `Mark as "Watched"?`,
                    undefined,
                    [
                    {
                        text: 'Watched',
                        onPress: () => {
                          onAddToSeen();
                          onRemoveFromList();
                        }
                    },
                    {
                        text: 'Cancel',
                    },
                    ]
                )}
              />
              <Button 
                title={"Remove from List"}
                type="outline"
                titleStyle={styles.buttonTextStyle}
                buttonStyle={styles.removeButtonStyle}
                onPress={() =>
                Alert.alert(
                    "Remove from List?",
                    undefined,
                    [
                    {
                        text: 'Remove',
                        style: 'cancel',
                        onPress: () => onRemoveFromList()
                    },
                    {
                        text: 'Cancel',
                    },
                    ]
                )}
              />
            </View>
          )}
        </Animated.View>
      </View>
      <Animated.View 
        style={[
          styles.bottomInfo,
          {
            transform: [{
              translateY: componentAnimations.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [100, 100, 0]
              })
            }],
            opacity: componentAnimations.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [0, 0, 1]
            })
          }
        ]}
      >
        <Text style={styles.plotText}>{movie.Plot}</Text>
        <View style={styles.furtherInfoContainer}>
          <Text style={[styles.furtherInfoText, styles.textPadding]}>
            <Text style={styles.boldText}>Directors:</Text>
            <Text> {movie.Director}</Text>
          </Text>
          <Text style={[styles.furtherInfoText, styles.textPadding]}>
            <Text style={styles.boldText}>Writers:</Text>
            <Text> {movie.Writer}</Text>
          </Text>
          <Text style={[styles.furtherInfoText, styles.textPadding]}>
            <Text style={styles.boldText}>Actors:</Text>
            <Text> {movie.Actors}</Text>
          </Text>
          <Text style={[styles.furtherInfoText, styles.textPadding]}>
            <Text style={styles.boldText}>Country:</Text>
            <Text> {movie.Country}</Text>
          </Text>
        </View>
      </Animated.View>
    </ScrollView>
);

const styles = StyleSheet.create({
  contentContainer: {
    width: '100%',
    marginTop: 16,
    paddingBottom: 24,
    paddingHorizontal: 16,
  },
  topInfo: {
    paddingBottom: 16,
    flexDirection: 'row',
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  noImage: {
    height: 260,
    width: 164,
    borderRadius: 4,
    borderColor: Colors.border,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noImageText: {
    color: Colors.greyText,
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
    color: Colors.white,
    fontSize: 12,
  },
  buttonStyle: {
    borderColor: Colors.tintColor,
    backgroundColor: Colors.tintColor,
    borderRadius: 6,
    margin: 12,
  },
  disabledButtonStyle: {
    borderColor: Colors.greyText,
    backgroundColor: Colors.white,
  },
  disabledButtonText: {
    color: Colors.greyText
  },
  buttonContainer: {
    marginVertical: 12,
  },
  seenButtonStyle: {
    borderColor: Colors.tintColor,
    backgroundColor: Colors.tintColor,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  removeButtonStyle: {
    borderColor: Colors.greyText,
    backgroundColor: Colors.greyText,
    borderRadius: 6,
    marginHorizontal: 12,
    marginTop: 6,
  },
  bottomInfo: {
    paddingVertical: 16,
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

export default MovieFullContainer(MovieFull);
