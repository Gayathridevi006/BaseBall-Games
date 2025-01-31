import React, { useEffect, useState } from "react";
import { Box, Button, FormControl, InputLabel, NativeSelect, TextField, Modal } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ArrowBack from "@mui/icons-material/ArrowBack";
import DefaultImage from "../assets/image.png";

const CommentaryCard = () => {
    const [responseData, setResponseData] = useState({
        key_moment: "N/A",
        sentiment_score: "N/A",
        summary: "N/A",
        audio: null,
        image: DefaultImage,
    });
    const [imageSrc, setImageSrc] = useState(DefaultImage);
    const [audioSrc, setAudioSrc] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [playersList, setPlayersList] = useState([]);  // Players list from the API
    const [loadingPlayers, setLoadingPlayers] = useState(true);  // Loading state for players list
    const navigate = useNavigate();
    const [colorIndex, setColorIndex] = useState(0);
    const [team, setTeam] = useState("");
    const [player, setPlayer] = useState("");
    const [playerId, setPlayerId] = useState(null);
    const [language, setLanguage] = useState("");
    const [teamsList, setTeamsList] = useState([]);
    const [commentary, setCommentary] = useState("");
    const [error, setError] = useState("");

    const colors = ["#22c55e", "#3b82f6", "#eab308", "#ef4444", "#a855f7", "#f97316"];

    const fetchPlayers = async (teamId) => {
        if (!teamId) return;

        setLoadingPlayers(true);
        try {
            const response = await fetch(`http://127.0.0.1:8001/team_players/${teamId}`);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

            const data = await response.json();
            setPlayersList(data.players || []);
        } catch (err) {
            setError("Failed to load players. Please try again.");
            console.error("Error fetching players:", err);
        } finally {
            setLoadingPlayers(false);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setColorIndex((prev) => (prev + 1) % colors.length);
        }, 1000);
        return () => clearInterval(interval);
    }, [colors.length]);

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleTeamChange = (e) => {
        const teamId = parseInt(e.target.value, 10);
        setTeam(teamId);
        fetchPlayers(teamId);
    };

    const handlePlayerChange = (e) => {
        const selectedPlayerId = e.target.value;
        setPlayer(selectedPlayerId);
        setPlayerId(selectedPlayerId);
    };
    const handleLogout = async () => {
        try {
            await logout();
            navigate("/");
        } catch (error) {
            console.error("Error logging out:", error.message);
        }
    };

    const handleStartGame = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8001/process-commentary', { method: 'POST' }); // API request to fetch game data
            const data = await response.json();

            setResponseData({
                key_moment: data.key_moment || 'No key moment found',
                sentiment_score: data.sentiment_score || 'No sentiment score found',
                summary: data.summary || 'No summary available',
                imageSrc: data.imageSrc || '',  // Set image URL
                audioSrc: data.audioSrc || '',  // Set audio URL
            });

            // Redirect to the result page with the fetched data
            navigate('/game-result', { state: { data: responseData } });

        } catch (error) {
            console.error("Error fetching game data:", error);
            // Handle error appropriately here
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className=" min-h-screen bg-purple-100">
            <div className="p-5">
                <div className=" bg-green-500 shadow-lg rounded-lg w-10 p-2">
                    <Link to="/get-start">
                        <ArrowBack className="text-6xl text-white cursor-pointer  " />
                    </Link>
                </div>
            <div className="w-full max-w-4xl p-5">
                {/* Outer Box with Shadow and Padding */}
                <Box sx={{ m: 1, width: "160%",
                    height: "200%",
                    display: "flex",
                    bgcolor : "background.paper"
                }}>
                        
                    {/* Main Section */}
                    <div className="max-w-7xl mx-auto p-5">
                        <main className="flex flex-col items-center py-10 lg:py-16 px-4 relative font-bold">
                            <h4 className="text-2xl lg:text-4xl !text-black mb-10">
                                Select Options to have your card for the game
                            </h4>
                            {/* Card Section */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Favorite Teams */}
                                <Box sx={{ m: 1, width: "100%" }}>
                                    <FormControl fullWidth>
                                        <InputLabel variant="standard">Select favorite team</InputLabel>
                                        <NativeSelect value={team} onChange={handleTeamChange}>
                                            <option value="" disabled>
                                                Select favorite team
                                            </option>
                                            <option value="119">Kevin De Bruyne</option>
                                            <option value="118">Rodri</option>
                                            <option value="120">Erling Haaland</option>
                                            <option value="102">Mohamed Salah</option>
                                            <option value="100">Aaron Judge</option>
                                        </NativeSelect>
                                    </FormControl>
                                </Box>

                                {/* Favorite Players */}
                                <Box sx={{ m: 1, width: "100%" }}>
                                    <FormControl fullWidth>
                                        <InputLabel variant="standard">Select favorite player</InputLabel>
                                        <NativeSelect value={player} onChange={handlePlayerChange}>
                                            <option value="" disabled>
                                                Select favorite player
                                            </option>
                                            {loadingPlayers ? (
                                                <option>Loading players...</option>
                                            ) : playersList.length > 0 ? (
                                                playersList.map((p) => (
                                                    <option key={p.id} value={p.id}>
                                                        {p.fullName}
                                                    </option>
                                                ))
                                            ) : (
                                                <option>No players available</option>
                                            )}
                                        </NativeSelect>
                                    </FormControl>
                                </Box>

                                {/* Language */}
                                <Box sx={{ m: 1, width: "100%" }}>
                                    <FormControl fullWidth>
                                        <InputLabel variant="standard">Select a language</InputLabel>
                                        <NativeSelect value={language} onChange={(e) => setLanguage(e.target.value)}>
                                            <option value="" disabled>
                                                Select a language
                                            </option>
                                            <option value="en">English</option>
                                            <option value="sp">Spanish</option>
                                        </NativeSelect>
                                    </FormControl>
                                </Box>

                                {/* Commentary */}
                                <Box sx={{ m: 5, width: "200%" , bgcolor:"-moz-initial" }}>
                                    <TextField
                                        label="Commentary"
                                        variant="outlined"
                                        multiline
                                        rows={5}
                                        value={commentary}
                                        onChange={(e) => setCommentary(e.target.value)}
                                        fullWidth
                                    />
                                </Box>
                            </div>

                            {/* Start Game Button */}
                            <button
                                onClick={handleStartGame}
                                className="w-full md:w-96 focus:outline-none focus:ring-4 bg-blue-500 hover:bg-blue-300 text-white py-3 rounded-md text-lg font-medium transition duration-300"
                            >
                                Start your game
                            </button>
                        </main>
                    </div>
                </Box>

                {/* Modal */}
                <Modal open={openModal} onClose={handleCloseModal}>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: 400,
                            bgcolor: "background.paper",
                            p: 4,
                            borderRadius: 2,
                            boxShadow: 3,
                        }}
                    >
                        <h2>User Information</h2>
                        <p><strong>Team:</strong> {team || "Not Selected"}</p>
                        <p><strong>Player:</strong> {player || "Not Selected"}</p>
                        <p><strong>Language:</strong> {language || "Not Selected"}</p>
                        <p><strong>Commentary:</strong> {commentary || "Not Provided"}</p>
                        <Button onClick={() => setOpenModal(false)} variant="contained">
                            Close
                        </Button>
                    </Box>
                    </Modal>
                </div>
            </div>
            </div>
        );
    };

export default CommentaryCard;
