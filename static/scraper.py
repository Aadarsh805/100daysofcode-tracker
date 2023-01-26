import json
import snscrape.modules.twitter as sntwitter
import pandas as pd
import sys


def main(username: str):
    query = f'(#100daysofcode) (from:{username}) until:2023-01-20 since:2018-12-01'
    tweets = []
    limit = 5000
    for tweet in sntwitter.TwitterSearchScraper(query).get_items():
        if len(tweets) == limit:
            break
        else:
            tweets.append({"date": tweet.date.strftime("%Y-%m-%d %H:%M:%S"),
                           "username": tweet.user.username, "content": tweet.content})
    df = pd.DataFrame(tweets)
    # Convert the dataframe to json
    data = df.to_json()
    # json_data = json.dumps(data)
    print(data)
    # print the json data to the standard output
    # sys.stdout.write(data)
    # sys.stdout.flush()


if __name__ == '__main__':
    if len(sys.argv) > 1:
        main(sys.argv[1])
    else:
        print('username is required')


# import json
# import snscrape.modules.twitter as sntwitter
# import pandas as pd
# import sys


# def main(username: str):
#     query = f'(#100daysofcode) (from:{username}) until:2023-01-20 since:2018-12-01'
#     tweets = []
#     limit = 5
#     print(username)
#     for tweet in sntwitter.TwitterSearchScraper(query).get_items():
#         if len(tweets) == limit:
#             break
#         else:
#             tweets.append({"date": tweet.date.strftime("%Y-%m-%d %H:%M:%S"),
#                            "username": tweet.user.username, "content": tweet.content})
#     df = pd.DataFrame(tweets)
#     # Convert the dataframe to json
#     data = df.to_json()
#     # json_data = json.dumps(data)
#     print(type(data), 'fff')
#     # print the json data to the standard output
#     print(data)


# if __name__ == '__main__':
#     import sys
#     if len(sys.argv) > 1:
#         main(sys.argv[1])
#     else:
#         print('username is required')
