import React, { useState } from 'react';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsAPI';
import { Select, Typography, Row, Col, Card } from 'antd';
import Loader from './Loader';




const { Text, Title } = Typography;

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = (simplified) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({ count: simplified ? 6 : 54 });
  console.log(cryptoNews)
  if (!cryptoNews) return <Loader />;
  return (
    <>
    <Row gutter={[24,24]}>
      
    {cryptoNews?.articles?.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{news.title.length>25 ? `${news.title.substring(0,25)}...`: news.title}</Title>
                <img style={{maxWidth:'200px', maxHeight:'100px'}} src={news?.urlToImage || demoImage} alt="" />
              </div>
              <p>{news.content.length > 100 ? `${news.content.substring(0, 100)}...` : news.content}</p>
              <div className="provider-container">
                <div>
                  <Text className="provider-name">{news.source.name}</Text>
                </div>
                <Text>{moment(news.publishedAt).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  )
}

export default News;