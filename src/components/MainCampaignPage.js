import CampaignPage from './CampaignPage'

function MainCampaignPage() {
  return (
    <>
        <CampaignPage/>
        <CampaignPage 
            campaignName="Twitter Followers"
            followers="807K"
            rateChange="+7.62%"
            rateText="folowers growth"
            iconSrc="/images/campaign/Icon (9).png"
            iconAlt="Twitter icon"
            dropdownIconSrc="/images/campaign/Dropdown (1).png"
            dropdownIconAlt="campaign dropdown"
            rateIconSrc="/images/campaign/Up-right.png"
            rateIconAlt="up-right icon"
        />
        <CampaignPage 
            campaignName="Spotify Listerners"
            followers="1,073K"
            rateChange="14.7%"
            rateText="less comments than usual"
            iconSrc="/images/campaign/Icon (10).png"
            iconAlt="Spotify icon"
            dropdownIconSrc="/images/campaign/Dropdown (1).png"
            dropdownIconAlt="campaign dropdown"
            rateIconSrc="/images/campaign/Down-left.png"
            rateIconAlt="down-left icon"
        />
        <CampaignPage 
            campaignName="Pinterest Posts"
            followers="97"
            rateChange="28.5%"
            rateText="more posts"
            iconSrc="/images/campaign/Icon (11).png"
            iconAlt="Pinterest icon"
            dropdownIconSrc="/images/campaign/Dropdown (1).png"
            dropdownIconAlt="pinterest dropdown"
            rateIconSrc="/images/campaign/Up-right.png"
            rateIconAlt="up-right icon"
        />
        <CampaignPage 
            campaignName="Github Contributes"
            followers="4,109"
            rateChange="28.5%"
            rateText="less comments than usual"
            iconSrc="/images/campaign/Icon (12).png"
            iconAlt="Github icon"
            dropdownIconSrc="/images/campaign/Dropdown (1).png"
            dropdownIconAlt="github dropdown"
            rateIconSrc="/images/campaign/Down-left.png"
            rateIconAlt="down-left icon"
        />
        <CampaignPage 
            campaignName="Youtube Subscribers"
            followers="354"
            rateChange="7.62%"
            rateText="subscribers growth"
            iconSrc="/images/campaign/Icon (13).png"
            iconAlt="Youtube icon"
            dropdownIconSrc="/images/campaign/Dropdown (1).png"
            dropdownIconAlt="youtube dropdown"
            rateIconSrc="/images/campaign/Up-right.png"
            rateIconAlt="up-right icon"
        />
        <CampaignPage 
            campaignName="Telegram posts"
            followers="566"
            rateChange="28.5%"
            rateText="more spending"
            iconSrc="/images/campaign/Icon (14).png"
            iconAlt="Telegram icon"
            dropdownIconSrc="/images/campaign/Dropdown (1).png"
            dropdownIconAlt="telegram dropdown"
            rateIconSrc="/images/campaign/Up-right.png"
            rateIconAlt="up-right icon"
        />
        <CampaignPage 
            campaignName="Redit Awards"
            followers="2.1M"
            rateChange="7.62%"
            rateText="followers growth"
            iconSrc="/images/campaign/Icon (15).png"
            iconAlt="Redit icon"
            dropdownIconSrc="/images/campaign/Dropdown (1).png"
            dropdownIconAlt="redit dropdown"
            rateIconSrc="/images/campaign/Up-right.png"
            rateIconAlt="up-right icon"
        />
    </>
  )
}

export default MainCampaignPage