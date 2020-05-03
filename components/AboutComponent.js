import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card , ListItem} from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
    return {
      partners: state.partners
    };
};

function Mission () {
return (
    <Card title ="Our Mission">
        <Text style={{margin: 10}}>
        We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
        </Text>
    </Card>
  );
}
class About extends Component {
    static navigationOptions = {
        title: 'About Us'
    }
    render() {
    const renderpartner=(item)=> {
        return (
            <ListItem title={item.item.name} 
            subtitle={item.item.description}
            leftAvatar={{source: {uri: baseUrl + item.item.image}}} />
        )
    }

    if (this.props.partners.isLoading) {
        return (
            <View>
                <Mission />
                <Card
                    title='Community Partners'>
                    <Loading />
                </Card>
            </View>
        );
    }

    if (this.props.partners.errMess) {
        return (
            <View>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                <Mission />
                <Card
                    title='Community Partners'>
                    <Text>{this.props.partners.errMess}</Text>
                </Card>
                </Animatable.View>
            </View>
        );
    }

        return (
            <View>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                <Mission />
                <Card title="Community Partners">
                <FlatList 
                data={this.props.partners.partners} 
                renderItem={renderpartner} 
                keyExtractor={item=>item.id.toString()}
                 />
                </Card>
                </Animatable.View>
            </View>
        );
    }
}

export default connect(mapStateToProps)(About);