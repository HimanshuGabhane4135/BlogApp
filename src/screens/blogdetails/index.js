import { ScrollView, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";

const BlogDetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>
        Multi-award winning journalist James Ball joins Demos as Fellow
      </Text>
      <Image
        style={styles.blogImg}
        source={require("../../../assets/favicon.png")}
      />
      <Text style={styles.content}>
        Multi-award winning journalist and author James Ball has joined
        Britain’s leading cross-party think tank Demos as a Fellow.{"\n"}
        {"\n"}James has worked as the global editor of TBIJ, a special
        correspondent at BuzzFeed UK and special projects editor at The
        Guardian, where he played a key role in the Pulitzer Prize-winning
        coverage of the NSA leaks by Edward Snowden, as well as the offshore
        leaks, HSBC Files, Reading the Riots and Keep it in the Ground projects.
        {"\n"}
        {"\n"}
        At WikiLeaks he was closely involved in Cablegate – the publication of
        250,000 classified US embassy cables in 2010 – as well as working on two
        documentaries based on the Iraq War Logs. {"\n"}
        {"\n"}James says: “Building a better internet is a fundamental challenge
        for future society. Demos has been at the forefront of working out what
        is happening on the internet, its consequences, and the conversation
        about the policy response to it all. I’m thrilled to be joining as a
        Fellow and excited to work with the team on future projects.” {"\n"}
        {"\n"}Polly Curtis, Chief Executive of Demos, said: “Our modus operandi
        at Demos is all about collaboration. In no space is that more important
        than in tech. Our vision for a safer, more democratic internet will only
        happen through working closely with policy-makers, industry, civil
        society and citizens themselves. James’ experience makes him perfectly
        placed to navigate this world and help us imagine a better web for all.”
        {"\n"}
        {"\n"}Ellen Judson, Head of CASM, Demos’ dedicated digital research hub,
        said: “As digitalisation continues to affect our society, economy and
        democracy in ever more profound ways, the fight for people’s voices to
        be heard in tech policymaking is crucial. We are delighted that James,
        who has a wealth of experience pioneering investigations into the role
        of the internet and technologies in our lives, is joining us on this
        journey”.
      </Text>
      <Text style={styles.subHeading}>DEMOS</Text>
      <Text style={styles.authorDescription}>
        15 Whitehall, Westminster London SW1A 2DD
      </Text>
    </ScrollView>
  );
};

export default BlogDetailsScreen;
