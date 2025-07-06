import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Plus, Edit, Trash2, Loader2 } from "lucide-react";

interface Note {
  id: string;
  text: string;
  createdAt: Date;
}

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [newNoteText, setNewNoteText] = useState("");
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [editText, setEditText] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const { toast } = useToast();

  // Simulate initial loading
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    setLoading(true);
    try {
      // TODO: Replace with actual Supabase query
      // For now, simulate API call with demo data
      setTimeout(() => {
        const demoNotes: Note[] = [
          { id: "1", text: "Hello", createdAt: new Date() },
          { id: "2", text: "Stranger", createdAt: new Date() },
          { id: "3", text: "Hope You understand CRUD operations with the help of this blog", createdAt: new Date() },
          { id: "4", text: "Thanks for reading Happy Coding!", createdAt: new Date() },
        ];
        setNotes(demoNotes);
        setLoading(false);
      }, 1000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch notes",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  const addNote = async (text: string) => {
    try {
      // TODO: Replace with actual Supabase insert
      const newNote: Note = {
        id: Date.now().toString(),
        text,
        createdAt: new Date(),
      };
      setNotes(prev => [newNote, ...prev]);
      setNewNoteText("");
      setIsAddDialogOpen(false);
      toast({
        title: "Success",
        description: "Note added successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add note",
        variant: "destructive",
      });
    }
  };

  const updateNote = async (id: string, text: string) => {
    try {
      // TODO: Replace with actual Supabase update
      setNotes(prev => prev.map(note => 
        note.id === id ? { ...note, text } : note
      ));
      setEditingNote(null);
      setEditText("");
      setIsEditDialogOpen(false);
      toast({
        title: "Success",
        description: "Note updated successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update note",
        variant: "destructive",
      });
    }
  };

  const deleteNote = async (id: string) => {
    try {
      // TODO: Replace with actual Supabase delete
      setNotes(prev => prev.filter(note => note.id !== id));
      toast({
        title: "Success",
        description: "Note deleted successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete note",
        variant: "destructive",
      });
    }
  };

  const startEdit = (note: Note) => {
    setEditingNote(note);
    setEditText(note.text);
    setIsEditDialogOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b px-4 py-4 z-10">
        <h1 className="text-xl font-semibold text-center">Your Notes</h1>
      </div>

      {/* Content */}
      <div className="p-4 pb-20">
        {notes.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <p className="text-muted-foreground text-lg mb-4">
              Nothing here yet—tap ➕ to add a note.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {notes.map((note) => (
              <Card key={note.id} className="bg-purple-50 border-purple-100">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm text-gray-700 flex-1 leading-relaxed">
                      {note.text}
                    </p>
                    <div className="flex gap-2 flex-shrink-0">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 text-red-500 hover:text-red-600 hover:bg-red-50"
                        onClick={() => deleteNote(note.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 text-blue-500 hover:text-blue-600 hover:bg-blue-50"
                        onClick={() => startEdit(note)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Floating Add Button */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg"
          >
            <Plus className="h-6 w-6" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Note</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Enter your note..."
              value={newNoteText}
              onChange={(e) => setNewNoteText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && newNoteText.trim()) {
                  addNote(newNoteText.trim());
                }
              }}
            />
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button 
                onClick={() => addNote(newNoteText.trim())}
                disabled={!newNoteText.trim()}
              >
                Add Note
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Note</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Enter your note..."
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && editText.trim() && editingNote) {
                  updateNote(editingNote.id, editText.trim());
                }
              }}
            />
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                Cancel
              </Button>
              <Button 
                onClick={() => editingNote && updateNote(editingNote.id, editText.trim())}
                disabled={!editText.trim()}
              >
                Update Note
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Notes;