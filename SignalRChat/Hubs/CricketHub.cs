using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace SignalRChat.Hubs
{
    public class CricketHub:Hub
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }

        public async Task SendSwap(string currentUser)
        {
            string newUser;
            if (currentUser == "1")
            {
                newUser = "2";
            }
            else
            {
                newUser = "1";
            }

            await Clients.All.SendAsync("ReceiveSwap", newUser);
        }

        public async Task SendScore(string user, string currentTotal, string currentMark, string opponentMark, string pointVal)
        {
            if(currentMark=="")
            {
                currentMark = "/";
            }
            else if(currentMark=="/")
            {
                currentMark = "X";
            }
            else if(currentMark=="X")
            {
                currentMark = "O";
            }
            else if(currentMark=="O")
            {
                if(opponentMark!="O")
                {
                    currentTotal = (int.Parse(currentTotal) + int.Parse(pointVal)).ToString();
                }
            }
            else
            {
                currentMark = "/";
            }



            await Clients.All.SendAsync("ReceiveScore", user, currentTotal, currentMark, pointVal);
        }

    }


}
