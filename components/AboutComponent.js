import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card , ListItem} from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
      partners: state.partners
    };
};

function Mission ()
{
    console.log("Mission")
return (
    <Card title ="Our Mission">
        <Text style={{margin: 10}}>
        We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
        </Text>
</Card>
)
}



class About extends Component {

    static navigationOptions = {
        title: 'About Us'
    }

    render() {
    const Renderpartner=(item)=> {
        return (
            <ListItem title={item.item.name} 
            subtitle={item.item.description}
            leftAvatar={{source: {uri: baseUrl + item.image}}} 
            />
        )
    }
        return (
            <View>
                <Mission />
                <Card title="Community Partners">
                <FlatList 
                    data={this.props.partners.partners}
                    renderItem={renderPartner}
                    keyExtractor={item => item.id.toString()}
                    />
                </Card>
                
            </View>
        );
    }
}

export default connect(mapStateToProps)(About);