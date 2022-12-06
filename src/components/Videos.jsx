import { Stack, Box } from "@mui/material";

import {VideoCard, ChannelCard} from "./";

const Videos = ({ videos }) =>(
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((item, id) => (
            <Box key={id}>
                {item.id.videoId && <VideoCard  />}
                {/* {item.id.channelId && <ChannelCard />} */}
            </Box>
        ))}
    </Stack>
);

export default Videos;
